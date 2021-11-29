import "./style.css";

document.querySelector("#app").innerHTML = `
<div class=" bg-gray-50 text-purple-400 px-8">
  Hello Tailwindcss!
</div>
<section class=" py-crazy bg-purple-700 sm:bg-pink-400 md:bg-green-400 lg:bg-blue-500">
<div class=" container mx-auto">

  <h2 class=" text-red-200 mt-0  mb-13 leading-tight">
    custom utitlity classes!
  </h2>
 
</div>

</section>
 
 
I am a <a class="text-red-700 hover:bg-green-300 hover:text-blue-300" href="#">state variants link</a>.
 
<button class="block w-full py-2 px-4 hover:text-blue-400 rounded-sm mb-2  bg-purple-light hover:bg-black" tabindex="0">
state variants
</button>
 
<div class="group p-4  bg-grey-light w-48 hover:bg-red-500">
    <h2 class="mb-1 inline-block  w-24 bg-purple-300 text-green-300  group-hover:text-yellow-400">
      Group
    </h2>
    <div class=" bg-purple-200 inline-block  w-24 text-green-300 group-hover:text-yellow-400">
      group
    </div>
  </div>

  <div class="bg-gradient-blue md:bg-gradient-orange rounded-lg  p-4 mb-2">
  <h2>Gradients...</h2>
</div>

<div class="bg-gradient-orange md:bg-gradient-blue rounded-lg  p-4 mb-2">
  <h2>...are back!</h2>
</div>


<button class="button">Button</button>
<button class="button button--pink">Button</button>
<button class="button button--teal">Button</button>

<button class="button button--pill">Button</button>
<button class="button button--pill button--pink">Button</button>
<button class="button button--pill button--teal">Button</button>

<button class="button button--square">Button</button>
<button class="button button--square button--pink">Button</button>
<button class="button button--square button--teal">Button</button>







`;
