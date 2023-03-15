<template>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
        
    
        <div class="Title">Add equipment for {{ gymName }}</div>
        <br><br>
        <div class="Details"> Select Equipment</div>
        <button class="button" @click="isDropdownOpen=1">Test</button>
            <!-- <div v-if="value.isDropdownOpenclass==1"></div> -->
            <div v-for=" e,index in gymEquipment">
                <div class='card' id="card{{index}}">
                    
                    <img src="@/assets/equipment.jpeg" />
    
                    
                    <!-- <div class="right">
                        <div v-if="Math.random() > 0.5">
                            <span class="checkmark">
                            <div class="checkmark_circle"></div>
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                            </span>
                        </div>
                        <div v-else>
                            <span class="crosssign">
                            <div class="crosssign_circle"></div>
                            <div class="crosssign_stem"></div>
                            <div class="crosssign_stem2"></div>
                            </span>
                        </div>
                    </div>
     -->
    
                    {{ e }}<br>
                    <div class="equipment_details">
        
                        Votes from {{300*Math.floor(Math.random() * 101)}} users
                    </div>
    
                    
                </div>
                
    
            </div>
    


    
    </template>
    
    <!-- <style>
    @media (min-width: 1024px) {
        .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
    
    }
    
    
    </style> -->
    
    <!-- <script lang="ts">
    
        </script> -->
    
    <script lang="ts">
    
        import {useRoute, useRouter} from "vue-router";
        import {defineComponent} from "vue";
        import {RouteName} from "@/router";
        
    
    
        export type Location = {
            name: string;
            date: string;
            numberOfPeople: number;
            complete: boolean;
        };
        export type Equipment = {
            name: string;
            equipment: string[];
        };
    
        export default defineComponent({
            name: "GymDetails",
            setup() {
                const route = useRoute();
                const locations: Location[] = [
                    {name: 'Basic-Fit Amsterdam', date: '11/02/2022', numberOfPeople: 4, complete: true},
                    {name: 'Basic-Fit Amsterdam West', date: '12/01/2022', numberOfPeople: 2, complete: true},
                    {name: 'Basic-Fit Leiden', date: '04/06/2021', numberOfPeople: 6, complete: true},
                    {name: 'Power-Fit Diemen', date: '08/10/2021', numberOfPeople: 10, complete: true},
                    {name: 'Get-Fit Hilversum', date: '12/12/2022', numberOfPeople: 14, complete: true},
                    {name: 'Get-Fit Utrecht', date: '10/02/2023', numberOfPeople: 12, complete: false},
                    {name: 'Get-Fit Den Haag', date: '04/02/2020', numberOfPeople: 2, complete: true}
                ];
                const equipment: Equipment[] = [
                    {name: 'Basic-Fit Amsterdam', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press',
                    'Incline bench press',
                    'Decline bench press',
                    'Adjustable bench',
                    'Olympic Weight Bench'
                    ]},
                    {name: 'Basic-Fit Amsterdam West', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press',
                    'Incline bench press',
                    'Decline bench press',
                    'Adjustable bench',
                    'Olympic Weight Bench',
                    'Tricep Extension Machine',
                    'Shoulder Press Machine',
                    'Front Pull Down Machine'
                    ]},
                    {name: 'Basic-Fit Leiden', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press'
                    ]},
                    {name: 'Power-Fit Diemen', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press'
                    ]},
                    {name: 'Get-Fit Hilversum', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press',
                    'Incline bench press',
                    'Decline bench press',
                    'Adjustable bench',
                    'Olympic Weight Bench',
                    'Tricep Extension Machine',
                    'Shoulder Press Machine',
                    'Front Pull Down Machine'
                    ]},
                    {name: 'Get-Fit Utrecht', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press',
                    'Incline bench press',
                    'Decline bench press',
                    'Adjustable bench',
                    'Olympic Weight Bench',
                    'Tricep Extension Machine',
                    'Shoulder Press Machine',
                    'Front Pull Down Machine'
                    ]},
                    {name: 'Get-Fit Den Haag', equipment: [ 
                    'Power rack',
                    'Chest fly machine',
                    'Bench Press',
                    'Incline bench press'
                    ]}
                ];
                const gymName = route.params.name as string;
                const gym = locations.find(location => location.name === gymName)!.name;
                const gymEquipment = equipment.find(eq=> eq.name === gymName)!.equipment;
                let isDropdownOpen=0;
                if (!gym|| !gymEquipment) {
                    const router = useRouter();
                    router.push({name: RouteName.GYM_OVERVIEW});
                }

                function toggle(): void{
                    alert("xronis");
                }
                return {
                    gymName,
                    locations,
                    gymEquipment,
                    toggle,
                    isDropdownOpen
    
    
                };
            }
        })
    
    </script>
    