<template>
  <div class="px-5 md:px-16 details-page">
    <div class="md:flex w-full gap-x-8">
        <div class="md:w-8/12 bg-white rounded-md shadow-md px-6 py-6 my-10">
            <div class="flex items-start justify-between px-3">
                <div class="w-20 pb-5">
                    <img src="../assets/tool-icon.png" alt="tool logo">
                </div>
                <button class="bg-secondary text-white px-5 py-2 rounded-md"><router-link to="/edit-tool">Edit Tool</router-link></button>
            </div>
            <div class="w-10/12 text-left">
                <h4 class="text-2xl font-medium">Wikidata Todo</h4>
                <p class="font-thin text-md py-2">
                    Shows you little things you can do on Wikidata.
                </p>
                <div class="flex flex-wrap items-center pt-5 gap-4">
                    <h6 class="font-medium text-lg ">Keywords: </h6>
                    <span class="px-4 py-2 keyword">Wikipedia</span>
                    <span class="px-4 py-2 keyword">API</span>
                    <span class="px-4 py-2 keyword">Todo</span>
                </div>
                <div class="pt-8">
                    <h4 class="text-xl font-medium pb-5">Links</h4>
                    <ul class="flex flex-col gap-y-4">
                        <li class="">
                            <h6 class="text-md font-medium pb-2">Bugs</h6>
                            <a href="https://bitbucket.org/magnusmanske/wikidata-game/issues" class="text-secondary">https://bitbucket.org/magnusmanske/wikidata-game/issues</a>
                        </li>
                        <li class="">
                            <h6 class="text-md font-medium pb-2">Developer Documentaion</h6>
                            <a href="https://bitbucket.org/magnusmanske/wikidata-game/issues" class="text-secondary">https://bitbucket.org/magnusmanske/wikidata-game/issues</a>
                        </li>
                        <li class="">
                            <h6 class="text-md font-medium pb-2">API Documentaion</h6>
                            <a href="https://bitbucket.org/magnusmanske/wikidata-game/issues" class="text-secondary">https://bitbucket.org/magnusmanske/wikidata-game/issues</a>
                        </li>
                        <li class="">
                            <h6 class="text-md font-medium pb-2">How to use</h6>
                            <a href="https://bitbucket.org/magnusmanske/wikidata-game/issues" class="text-secondary">https://bitbucket.org/magnusmanske/wikidata-game/issues</a>
                        </li>
                    </ul>

                </div>
                <div class="py-8">
                    <h4 class="text-xl font-medium pb-3">Sponsors</h4>
                    <ul class="flex flex-col flex-wrap md:flex-row gap-5">
                        <li class="">
                            <h6 class="text-md font-medium">Microsoft</h6>
                            <a href="https://micrsoft.com" class="text-secondary">https://micrsoft.com</a>
                        </li>
                        <li class="">
                            <h6 class="text-md font-medium">Google</h6>
                            <a href="https://google.coms" class="text-secondary">https://google.coms</a>
                        </li>
                        <li class="">
                            <h6 class="text-md font-medium">Facebook</h6>
                            <a href="https://facebook.com" class="text-secondary">https://facebook.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex md:w-4/12 flex-col">
          <div class="bg-white rounded-md shadow-md px-6 py-6 mt-10">
            <div class="flex justify-end">
                <button class="border-2 ml-auto rounded-md border-secondary text-secondary px-3 py-2">
                    Source Code {..}
                </button>
            </div>
            <div class="py-4">
                <h4 class="text-lg font-medium mb-5">More Information</h4>
                <ul class="flex flex-col gap-y-5">
                    <li class="flex gap-4">
                        <p class="font-thin text md">License:</p>
                        <h6 class="font-medium text-md">L31004</h6>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Wiki data QID:</p>
                        <h6 class="font-medium text-md">12334456789</h6>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Tool type:</p>
                        <h6 class="font-medium text-md">Web app</h6>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Bot username:</p>
                        <h6 class="font-medium text-md">Wiki_bot</h6>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Language:</p>
                        <h6 class="font-medium text-md">English</h6>
                    </li>
                    <li class="flex gap-5">
                        <p class="font-thin text md">Available UI language:</p>
                        <h6 class="font-medium text-md">EN, FR</h6>
                    </li>
                </ul>
            </div>
          </div>
           <div class="bg-white rounded-md shadow-md px-6 pt-6 my-5">
            <div class="py-4">
                <h4 class="text-lg font-medium mb-5">Author’s Information</h4>
                <ul class="flex flex-col gap-y-5">
                    <li class="flex gap-4">
                        <p class="font-thin text md">Author :</p>
                        <h6 class="font-medium text-md">Mark Essence</h6>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Username :</p>
                        <h6 class="font-medium text-md">markessence123</h6>
                    </li>
                    <li class="flex gap-3">
                        <p class="font-thin text md">Tool type:</p>
                        <a href="mailto:markessence@gmail.com" class="font-medium text-md">markessence@gmail.com</a>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Wiki Username :</p>
                        <h6 class="font-medium text-md">Mark101</h6>
                    </li>
                    <li class="flex gap-4">
                        <p class="font-thin text md">Github Username :</p>
                        <h6 class="font-medium text-md">MarkEssence</h6>
                    </li>
                    <li class="flex gap-5">
                        <p class="font-thin text md">Website:</p>
                        <a href="https://www.markessence.com" class="font-medium text-md">www.markessence.com</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.details-page{
    background: #F5F5F5;
}
.keyword{
    background: #d9d9d9;
    border-radius: 18px;
}
</style>