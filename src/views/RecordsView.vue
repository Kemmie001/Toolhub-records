<template>
  <div class="px-5 md:px-16">
    <h3 class="text-xl font-semibold py-8 pt-24">Records Metrics</h3>
    <div class="flex flex-col mb-10 md:flex-row md:flex-wrap justify-between gap-5">
        <div class="bg-secondary text-center py-6 px-4 text-white metric-card rounded-md">
           <h4 class="font-semibold text-xl"> 0100</h4>
           <p class="font-thing text-md pt-2">
            Total Number Of Tools
           </p>
        </div>
         <div class="bg-secondary text-center py-6 px-4 metric-card text-white rounded-md">
           <h4 class="font-semibold text-xl"> 0040</h4>
           <p class="font-thing text-md pt-2">
            Total Number Of Tools With Missing Info
           </p>
        </div>
         <div class="bg-secondary text-center py-6 metric-card px-4 text-white rounded-md">
           <h4 class="font-semibold text-xl"> 0010</h4>
           <p class="font-thing text-md pt-2">
            Total Number Of Tools Edited 
           </p>
        </div>
         <div class="bg-secondary  text-center py-6 px-4 metric-card text-white rounded-md">
           <h4 class="font-semibold text-xl">Oct 20, 2022</h4>
           <p class="font-thing text-md pt-2">
            Last Edited on
           </p>
        </div>
    </div>
    
    <div class="w-full md:flex justify-between">
        <div class="my-5 shadow-md rounded-md bg-white md:w-5/12 px-4 py-5">
            <div id="my-pie-chart-container">
            <div id="my-pie-chart"></div>

            <div id="legenda">
                <div class="entry">
                <div id="color-green" class="entry-color"></div>
                <div class="entry-text">Tools with Complete details (60.08%)</div>
                </div>
                <div class="entry">
                <div id="color-red" class="entry-color"></div>
                <div class="entry-text">Tools with Missing details (39.92%)</div>
                </div>
            </div>
            </div>
        </div>
        <div class="my-5 shadow-md rounded-md bg-white md:w-6/12 px-4 py-5">
      <h3 class="text-lg font-semibold pt-4">Most Edited Tools</h3>
      <div
          class="flex mt-5 w-full"
        >
          <table  class="table-auto relative w-full">
            <thead>
              <tr class="uppercase text-sm tracking-widest">
                <th class="w-1/12">S/N</th>
                <th class="w-5/12">Tool</th>
                <th class="w-6/12">Number of Edits</th>
              </tr>
            </thead>
            <tbody class="text-center mt-4">
              <tr v-for="(tool, index) in mostEditedTools" :key="tool.id" class="">
                <td class="pt-5">{{index + 1}}</td>
                <td class="pt-5">
                  {{tool.name}}
                </td> 
                <td class="pt-5">
                  {{tool.edits}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
    mostEditedTools: [
        {
          id: 2,
          name: "Wiki data",
          edits: 400,
          authors: [
            "Magnus Manske"
          ]
        },
        {
          id: 3,
          name: "CropTool",
          edits: 500,
          authors: [
            "Daniel Michael 0. Heggo"
          ]
        },
        {
          id: 8,
          name: "The Wikidata Game",
          edits: 700,
          authors: [
            "Magnus Manske"
          ]
        },
        {
          id: 10,
          name: "Wikidata Todo",
         edits: 50,
          authors: [
            "Magnus Manske"
          ]
        },
        {
          id: 11,
          name: "Ranker",
          edits: 300,
          authors: [
            "Lucas Werkmeister"
          ]
        },
        {
          id: 12,
          name: "Pet Scan",
          edits: 400,
          authors: [
            "Magnus Manske"
          ]
        },
      ],
        }
    }
}
</script>

<style>
@media screen and (min-width: 768px) {
    .metric-card{
    width: 23%;
}
}
@media screen and (max-width: 768px) {
    table{
        min-width: 200px;
        overflow: scroll;
    }
}
#my-pie-chart-container {
  display: flex;
  align-items: center;
}

#my-pie-chart {
  background: conic-gradient( green 60.08% 13.68%, red 39.92%);
  border-radius: 50%;
    width: 150px;
    height: 150px;
}

#legenda {
  margin-left: 10px;
  background-color: white;
  padding: 5px;
}

.entry {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.entry-color {
    height: 10px;
    width: 10px;
}

.entry-text {
  margin-left: 5px;
}

#color-red {
  background-color: red;
}


#color-green {
  background-color: green;
}



</style>