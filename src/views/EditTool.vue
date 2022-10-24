<template>
  <div class="px-5 md:px-16 details-page">
    <div>
      <form class="flex flex-col items-start md:flex-row flex-wrap gap-10">
        <div class="md:w-4/12 bg-white rounded-md shadow-md px-6 py-6 my-10">
          <h3 class="font-medium pb-4 text-xl">Tool Details</h3>
          <div class="form-container">
            <label for="title" class="text-md">Title</label>
            <input type="text" name="title" id="" v-model="name" />
          </div>
          <div class="form-container">
            <label for="description" class="text-md">Description</label>
            <textarea
              name="description"
              id=""
              cols="10"
              rows="6"
              v-model="description"
            ></textarea>
          </div>
          <div class="form-container">
            <label for="tool-website" class="text-md"
              >Tool official website</label
            >
            <input type="url" name="url" id="" v-model="website" />
          </div>
          <div class="form-container">
            <label for="keywords" class="text-md">Keywords</label>
            <input type="text" name="keywords" id="" v-model="keywords" />
          </div>

          <h3 class="font-medium py-3 text-xl">Links</h3>
          <div class="form-container pt-2">
            <label for="tool-website" class="text-md"
              >Developer documentation</label
            >
            <input type="url" name="url" id="" v-model="dev_doc" />
          </div>
          <div class="form-container">
            <label for="tool-website" class="text-md">API documentation</label>
            <input type="url" name="url" id="" v-model="api_doc" />
          </div>
          <div class="form-container">
            <label for="tool-website" class="text-md">How to use</label>
            <input type="url" name="url" id="" v-model="how_to_use" />
          </div>
        </div>
        <div class="flex-1 bg-white rounded-md shadow-md px-6 py-6 my-10">
          <h3 class="font-medium pb-4 text-xl">More Information</h3>
          <div class="grid md:grid-cols-2 gap-x-8">
            <div class="form-container">
              <label for="title" class="text-md">License</label>
              <input type="text" name="title" id="" v-model="license" />
            </div>
            <div class="form-container">
              <label for="wiki_id" class="text-md">Wikidata QID</label>
              <input type="text" name="wiki_id" id="" v-model="wiki_id" />
            </div>
            <div class="form-container">
              <label for="type" class="text-md">Tool type</label>
              <input type="text" name="type" id="" v-model="tool_type" />
            </div>
            <div class="form-container">
              <label for="bot" class="text-md">Bot username</label>
              <input type="text" name="bot" id="" v-model="bot_username" />
            </div>
            <div class="form-container">
              <label for="language" class="text-md">Language</label>
              <input type="text" name="language" id="" v-model="language" />
            </div>
            <div class="form-container">
              <label for="ui_language" class="text-md"
                >Available UI language</label
              >
              <input
                type="text"
                name="ui_language"
                id=""
                v-model="ui_language"
              />
            </div>
            <h3 class="font-medium py-3 text-xl w-full">
              Author's Information
            </h3>
            <br />
            <div class="form-container">
              <label for="author" class="text-md">Author</label>
              <input type="text" name="author" id="" v-model="author_name" />
            </div>
            <div class="form-container">
              <label for="author_username" class="text-md">Username</label>
              <input
                type="text"
                name="author_username"
                id=""
                v-model="author_username"
              />
            </div>
            <div class="form-container">
              <label for="author_email" class="text-md">Email</label>
              <input
                type="email"
                name="author_email"
                id=""
                v-model="author_email"
              />
            </div>
            <div class="form-container">
              <label for="wiki_username" class="text-md">Wiki username </label>
              <input
                type="text"
                name="wiki_username"
                id=""
                v-model="author_wiki_username"
              />
            </div>
            <div class="form-container">
              <label for="github_username" class="text-md"
                >Github username
              </label>
              <input
                type="text"
                name="github_username"
                id=""
                v-model="author_github_username"
              />
            </div>
            <div class="form-container">
              <label for="website" class="text-md">Website </label>
              <input type="url" name="website" id="" v-model="author_website" />
            </div>
            <h3 class="font-medium py-3 text-xl w-full">
              Sponsor's Information
            </h3>
            <br />
            <div class="form-container">
              <label for="sponsor" class="text-md">Sponsor</label>
              <input type="text" name="sponsor" id="" v-model="sponsor_name" />
            </div>
            <div class="form-container">
              <label for="sponsor_website" class="text-md">Website </label>
              <input
                type="url"
                name="sponsor_website"
                id=""
                v-model="sponsor_website"
              />
            </div>
          </div>
          <div class="flex justify-end gap-5">
            <button
              class="border-2 ml-auto rounded-md border-secondary text-secondary px-5 py-2"
            >
              <router-link to="/tool-details"> Cancel </router-link>
            </button>
            <button class="bg-secondary text-white px-5 py-2 rounded-md">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "Wikidata",
      description: "lorem ipsum asdfgherfghnhfdfsdxsfdgfhgdfscdsf",
      website: "https://www.wikidata.com",
      keywords: "data",
      dev_doc: "https://www.wikidata.com",
      api_doc: "https://www.wikidata.com",
      how_to_use: "https://www.wikidata.com",
      license: "L123089",
      wiki_id: "",
      tool_type: "",
      bot_username: "",
      language: "English",
      ui_language: "",
      author_name: "Mark Essence",
      author_username: "Mark123",
      author_email: "",
      author_wiki_username: "",
      author_github_username: "",
      author_website: "",
      sponsor_name: "Google",
      sponsor_website: "https://www.google.com",
    };
  },
};
</script>

<style>
.form-container {
  margin: 0.4rem 0;
}
.form-container > input,
textarea {
  border: 1px solid #d3d3d3;
  width: 100%;
  border-radius: 8px;
  padding: 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}
label {
  color: #17181a;
  font-weight: 400;
}
</style>
