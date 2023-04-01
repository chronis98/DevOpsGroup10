import {expect, it} from 'vitest';
import 'reflect-metadata';
import {flushPromises, mount} from "@vue/test-utils";
import GymOverview from "@/views/GymOverview.vue";
import {container} from "tsyringe";
import DiToken from "@/di/DiToken";
import type HttpClientInterface from "@/utils/HttpClient/Interface";
import type {HttpMethod} from "@/utils/HttpMethod";
import type OverviewGym from "@/models/Gym";
import router from "@/router";

it('One card is shown for each Gym fetched', async () => {
  const gymsAmount = 10;

  container.registerInstance(DiToken.HttpClient, new class HttpClientStubbedGymOverview implements HttpClientInterface {
    async send(url: string, method: HttpMethod, body?: unknown): Promise<OverviewGym[]> {
      return [...new Array(gymsAmount)].map((_, index) =>
          ({
            id: index,
            name: 'testA',
            imagePath: 'https://google.com',
            address: {
              id: 2,
              number: 3306,
              addition: null,
              street: "",
              city: "",
              postcode: "",
              coords: {
                lat: 42,
                long: 5
              }
            }
          }))
    }
  });

  const wrapper = mount(GymOverview, {
    global: {
      plugins: [
          router
      ]
    }
  })

  await flushPromises();

  expect(wrapper.findAll('.card')).toHaveLength(gymsAmount);
})
