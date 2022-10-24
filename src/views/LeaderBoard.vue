<template>
  <main>
    <div class="px-5 md:px-16 py-5">
      <h3 class="text-lg font-semibold pt-16">Leaderboard</h3>
      <div class="w-full flex mt-5">
        <table class="table-auto relative w-full">
          <thead>
            <tr class="uppercase text-sm tracking-widest">
              <th class="w-1/12">S/N</th>
              <th class="w-3/12">Name</th>
              <th class="w-2/12">Tools</th>
              <th class="w-3/12">Number of Edits</th>
              <th class="w-3/12">Date</th>
            </tr>
          </thead>
          <tbody class="text-center mt-4">
            <tr
              v-for="user in leaderboardData"
              :key="user.id"
              class="bg-white h-16 leader border-b-8 border-white shadow-sm"
            >
              <td class="py-3">0{{ user.id }}</td>
              <td class="py-3">
                {{ user.name }}
              </td>
              <td class="py-3">
                {{ user.tool }}
              </td>
              <td class="py-3">
                {{ user.edits }}
              </td>
              <td class="py-3">
                {{ user.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-8 justify-end flex w-full">
        <div class="flex items-center">
          <button class="flex items-center pagination-btn text-lg"><</button>
          <div class="px-3">
            <p class="text-sm">Page 1 out of 4</p>
          </div>
          <button class="flex items-center pagination-btn text-lg">></button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      leaderboardData: [
        {
          id: 1,
          name: "Mark Essence",
          edits: 10,
          tool: "Wikidata",
          date: "Oct 22, 2022",
        },
        {
          id: 2,
          name: "Mmikolaj0",
          edits: 24,
          tool: "Wikidata Todo",
          date: "Oct 21, 2022",
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
    };
  },
  components: {},
};
</script>

<style>
.leader {
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-spacing: 10px;
  /* border-bottom: 10px solid #fff; */
  border-radius: 10px;
}
.leader:hover {
  background: #7fc5ed;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
table {
  border-collapse: separate;
  border-spacing: 0 0.8rem;
}
@media screen and (max-width: 768px) {
  table {
    min-width: 700px;
    overflow: scroll;
  }
}
</style>
