<script  lang="ts">

import ToolCard from '../components/ToolCard.vue'
export default {
  data () {
    return {
      tools: [
      {
        id: 1,
        name: "Wiki data",
        description: "Shows you little things you can do wikidata",
        missing: false,
        authors: [
          "Magnus Manske"
        ]
      },

      {
        id: 4,
        name: "OpenRefine",
        description: "A free data wrangling tool to work with messy data, to clean and improve it, and to connect it with knowledge bases",
        missing: false,
        authors: [
          "Pintoch"
        ]
      },
      {
        id: 5,
        name: "PAWS",
        description: "PAWS: A Web Shell (PAWS) is a Jupyter notebook deployment hosted by Wikimedia.",
        missing: false,
        authors: [
          "Yuvi Panda"
        ]
      },
      {
        id: 6,
        name: "Quarry ",
        description: "Quarry is a public querying interface for Wiki Replicas, a set of live replica SQL databases of public Wikimedia Wikis.",
        missing: false,
        authors: [
          "Yuvi Panda"
        ]
      },
      {
        id: 7,
        name: "QuickStatements",
        description: "Tool to edit Wikidata items, based on a simple set of text commands.",
        missing: false,
        authors: [
          "Magnus Manske"
        ]
      },

      {
        id: 9,
        name: "Name to Q",
        description: "Convert a batch of article names to Wikidata Q numbers",
        missing: false,
        authors: [
          "Taavi Väänänen"
        ]
      },
      ],
      missingTools: [
        {
          id: 2,
          name: "Wiki data",
          description: "Shows you little things you can do wikidata",
          missing: true,
          authors: [
            "Magnus Manske"
          ]
        },
        {
          id: 3,
          name: "CropTool",
          description: "Tool for cropping images at Wikimedia Commons and other Wikimedia sites",
          missing: true,
          authors: [
            "Daniel Michael 0. Heggo"
          ]
        },
        {
          id: 8,
          name: "The Wikidata Game",
          description: "Shows you little things you can do wikidata",
          missing: true,
          authors: [
            "Magnus Manske"
          ]
        },
        {
          id: 10,
          name: "Wikidata Todo",
          description: "Shows you little things you can do wikidata",
          missing: true,
          authors: [
            "Magnus Manske"
          ]
        },
        {
          id: 11,
          name: "Ranker",
          description: "Shows you little things you can do wikidata",
          missing: true,
          authors: [
            "Lucas Werkmeister"
          ]
        },
        {
          id: 12,
          name: "Pet Scan",
          description: "Replacement for CatScan2, QuickIntersection, Creator, Autolist etc.",
          missing: true,
          authors: [
            "Magnus Manske"
          ]
        },
      ],
      leaderboardData: [
                {
                id: 1,
                name: "Mark Essence",
                edits: 10,
                tool: "Wikidata",
                date: "Oct 22, 2022"
                },
                {
                id: 2,
                name: "Mmikolaj0",
                edits: 24,
                tool: "Wikidata Todo",
                date: "Oct 21, 2022"
                },
                {
                id: 3,
                name: "BDavis",
                edits: 7,
                tool: "Wikifile",
                date: "Oct 20, 2022",
                },
                {
                id: 4,
                name: "SStefanova",
                edits: 10,
                tool: "CropTool",
                date: "Oct 19, 2022",
                },
                {
                id: 5,
                name: "Chenyang2016",
                edits: 23,
                tool: "Ranker",
                date: "Oct 13, 2022",
                },
                {
                id: 6,
                name: "Chenyang2016",
                edits: 23,
                tool: "Ranker",
                date: "Oct 13, 2022",
                },
                {
                id: 7,
                name: "Victor349",
                edits: 2,
                tool: "Ranker",
                date: "Oct 13, 2022",
                },
                {
                id: 8,
                name: "Amberskinner79",
                edits: 23,
                tool: "Ranker",
                date: "Oct 10, 2022",
                },
            ],
      innerStyles: {},
      step: '',
       transitioning: false,
    }
   
  },
components:{
  ToolCard,
},
  mounted () {
    this.setStep()
  },

  methods: {
    setStep () {
      
      const innerWidth = this.$refs.inner.scrollWidth 
      const totalCards = this.tools.length
      this.step = `${innerWidth / totalCards}px` 
    },

    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft() 
      this.afterTransition(() => { 
      const card = this.tools.shift()
      this.tools.push(card) 
      this.resetTranslate()
    })
    },
        prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.tools.pop()
        this.tools.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener) 
      this.transitioning = false
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                translateX(-${this.step})`
      }
    },
    moveRight () {
    this.innerStyles = {
      transform: `translateX(${this.step})
                  translateX(-${this.step})` // ❷
    }
    },
     resetTranslate () {
    this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    },
}
}
</script>

<template>
  <main>
    
    <div class="px-5 md:px-16">
    <div class="pt-20 md:flex justify-between w-full" >
    <h3 class="text-xl pb-5 md:pb-0 font-semibold">Homepage</h3>
    <div class="flex gap-x-4">
      <div class="text-ash search flex">
        
        <span class="w-4 self-center">
            <img src="../assets/search.svg" alt="">
        </span>
        <input
        style="background-color: rgba(127, 197, 237, 0.05)"
          type="search"
          class="outline-none"
          name=""
          placeholder="Search"
        />
      </div>
      
    </div>
    </div>
    <h3 class="text-lg font-semibold py-5">Management Tools</h3>

    <div class="py-4 relative">
      <div class="carousel mb-5">
      <div ref="inner" class="inner" :style="innerStyles">
        <div class="card-main" v-for="tool in tools" :key="tool.id">
          <ToolCard :name="tool.name" :description="tool.description" :authors="tool.authors" :missing="tool.missing"/>
        </div>
      </div>
      </div>
      <button class="prev-btn" @click="prev"><</button>
      <button class="next-btn" @click="next">></button>
    </div>
    <div class="md:flex items-start gap-5 w-full">
      <div class="missing pb-5 md:w-7/12">
      <h3 class="text-lg font-semibold pt-4">Tools With Missing Fields</h3>
      <div class="flex mt-5 flex-col md:flex-row md:flex-wrap w-full gap-5">
        <div v-for="tool in missingTools" :key="tool.id">
          <div class="">
            <ToolCard :name="tool.name" :description="tool.description" :authors="tool.authors" :missing="tool.missing"/>
          </div>
        </div>
      </div>
      <div class="flex my-8 w-11/12 text-light justify-end">
          <router-link to="/">
            View All
          </router-link>
        </div>
    </div>
    <div class="bg-white shadow-md flex-1 rounded-md px-4 py-5">
      <h3 class="text-lg font-semibold pt-4">Leaderboard</h3>
      <div
          class=" w-full flex mt-5 "
        >
          <table  class="table-auto relative w-full">
            <thead>
              <tr class="uppercase text-sm tracking-widest">
                <th class="w-1/12">S/N</th>
                <th class="w-4/12">Name</th>
                <th class="w-3/12">Tools</th>
                <th class="w-4/12">Number of Edits</th>
              </tr>
            </thead>
            <tbody class="text-center mt-4">
              <tr v-for="user in leaderboardData" :key="user.id" class="">
                <td class="pt-5">{{user.id}}</td>
                <td class="pt-5">
                  {{user.name}}
                </td>
                <td class="pt-5">
                  {{user.tool}}
                </td>
                <td class="pt-5">
                  {{user.edits}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex mt-8 w-11/12 text-light justify-end">
          <router-link to="/leader-board">
            View All
          </router-link>
        </div>
    </div>
    </div>
    
    </div>
  </main>
</template>
<style >
.search{
  background: rgba(127, 197, 237, 0.2);
  padding: 0.5rem;
  color: #0F0D0D;
border-radius: 5px;
}
.prev-btn{
  position: absolute;
  top: 90px;
  width: 25px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-bottom: 4px;
  background: #7FC5ED;
  color: #fff;
  border-radius: 50%;
  margin-left: -15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
}
.next-btn{
  position: absolute;
  top: 90px;
  right: 0;
  width: 25px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-bottom: 4px;
  background: #7FC5ED;
  color: #fff;
  border-radius: 50%;
  margin-right: -15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
}
.carousel {
  width: 100% ; 
  overflow: hidden;
}

.inner {
  white-space: nowrap; 
  transition: transform 0.2s;
}

.card-main {
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-flex;
}

button {
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 10px;
}
</style>
