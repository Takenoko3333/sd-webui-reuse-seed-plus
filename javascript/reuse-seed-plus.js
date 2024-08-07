// Seed Reuse Generate button delay time
function reuseDelayTime() {
  let reuseDelayTime = 500;
  const reuseDelayTimeInput = document.getElementById("reuse-seed-delay-time");
  if (reuseDelayTimeInput) {
    const reuseDelayTimeInputValue = reuseDelayTimeInput.value;
    if (parseInt(reuseDelayTimeInputValue) != reuseDelayTime)
      reuseDelayTime = parseInt(reuseDelayTimeInputValue);
  }
  return reuseDelayTime;
}

// Add Generate Button (🎲, ♻, +1) to txt2img and img2img
function addButtons(tab) {
  const normalDelayTime = 10;
  const generateButton = document.getElementById(`${tab}_generate`);
  const reuseSeedButton = document.getElementById(`${tab}_reuse_seed`);
  const skipButton = document.getElementById(`${tab}_skip`);
  const seedInput = document.querySelector(`#${tab}_seed > label > input`);
  const buttonClass = "lg primary gradio-button svelte-cmf5ev";
  const randomGenerateButtonId = `${tab}_rsp_random_generate_button`;
  const reuseGenerateButtonId = `${tab}_rsp_reuse_generate_button`;
  const plus1GenerateButtonId = `${tab}_rsp_plus1_generate_button`;

  function createElementFromHTML(html, callback) {
    const tempEl = document.createElement("div");
    tempEl.innerHTML = html;
    const child = tempEl.firstElementChild;
    child.addEventListener("click", callback);
    return child;
  }

  function delayGenerate(time = normalDelayTime) {
    setTimeout(function () {
      generateButton.click();
    }, time);
  }

  const box = document.querySelector(`#${tab}_generate_box`);
  box.style.gap = "4px";
  box.append(
    createElementFromHTML(
      `<button id="${randomGenerateButtonId}" class="${buttonClass}" style="min-width:0;" title="Randomly set and generate a new seed.">🎲</button>`,
      function () {
        seedInput.value = -1;
        seedInput.dispatchEvent(new Event("input"));
        delayGenerate();
      }
    )
  );
  box.append(
    createElementFromHTML(
      `<button id="${reuseGenerateButtonId}" class="${buttonClass}" style="min-width:0;" title="When a seed from the previous generation is available, it is reused to generate">♻</button>`,
      function () {
        reuseSeedButton.click();
        delayGenerate(reuseDelayTime());
      }
    )
  );
  box.append(
    createElementFromHTML(
      `<button id="${plus1GenerateButtonId}" class="${buttonClass}" style="min-width:0;" title="If seed is set, it is generated by adding 1 to seed; if seed is -1, this button is disabled">+1</button>`,
      function () {
        if (seedInput.value != -1) {
          seedInput.value = parseInt(seedInput.value) + 1;
          seedInput.dispatchEvent(new Event("input"));
          delayGenerate();
        } else {
        }
      }
    )
  );

  // Add css to skip button
  skipButton.style.zIndex = 1;

  // Monitor seed
  ["txt2img", "img2img"].forEach(function (tab) {
    const seedInput = document.querySelector(`#${tab}_seed > label > input`);
    const plus1GenerateButton = document.getElementById(
      `${tab}_rsp_plus1_generate_button`
    );
    setInterval(function () {
      // console.log(seedInput.value);
      if (plus1GenerateButton) {
        if (seedInput.value === "-1") {
          plus1GenerateButton.disabled = true;
        } else {
          plus1GenerateButton.disabled = false;
        }
      }
    }, 1000);
  });
}

// Add New Generate Butttons
function addNewGenerateButtons() {
  addButtons("txt2img");
  addButtons("img2img");
}

// Add 'Hires.fix with ♻️ & ADetailer' checkbox to txt2img
function createReuseSeedPlusArea() {
  const reuseSeedPlus = document.getElementById("reuse_seed_plus");
  const hiresFixCheckbox = document.getElementById(
    "txt2img_hr-visible-checkbox"
  );
  const settings = document.getElementById("txt2img_settings");
  const accordions = document.getElementById("txt2img_accordions");
  const adetailerCheckbox =
    document.querySelector("#script_txt2img_adetailer_ad_enable input") ||
    document.querySelector(
      "#script_txt2img_adetailer_ad_main_accordion-visible-checkbox"
    );
  const tiledvaeCheckbox = document.getElementById(
    "MDV-t2i-enabled-visible-checkbox"
  );

  if (!accordions || reuseSeedPlus) return;

  const reuseSeedPlusArea = document.createElement("div");
  reuseSeedPlusArea.id = "reuse_seed_plus";
  reuseSeedPlusArea.style =
    "display: flex; flex-wrap: wrap; gap: 0.6em 1em; padding: 0.4em 0 0.2em";

  // Create checkbox item
  ["rsp_reuse_seed_plus", "rsp_adetailer", "rsp_tiled_vae"].forEach(function (
    idName,
    index
  ) {
    if (idName === "rsp_adetailer" && !adetailerCheckbox) return;
    if (idName === "rsp_tiled_vae" && !tiledvaeCheckbox) return;

    const labelTitle = [
      adetailerCheckbox
        ? "Enable 'Reuse seed' and 'ADetailer' when enabling Hires.fix"
        : "Enable 'Reuse seed' when enabling Hires.fix",
      "Enable 'ADetailer' when enabling Hires.fix",
      "Enable 'Tiled VAE' when enabling Hires.fix",
    ];

    const spanText = [
      adetailerCheckbox ? "Hires.fix with ♻️ & ADetailer" : "Hires.fix with ♻️",
      "Hires.fix with ADetailer",
      "Hires.fix with Tiled VAE",
    ];
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${idName}_toggle`;
    checkbox.className = "svelte-1ojmf70";

    const label = document.createElement("label");
    label.id = `${idName}_label}`;
    label.className = "svelte-1ojmf70";
    label.style = "display: inline-block;";
    label.setAttribute("title", labelTitle[index]);

    const span = document.createElement("span");
    span.className = "ml-2 svelte-1ojmf70";
    span.textContent = spanText[index];

    label.appendChild(checkbox);
    label.appendChild(span);
    reuseSeedPlusArea.appendChild(label);
  });

  reuseSeedPlusArea.innerHTML += `
    <div>
      <div class="head svelte-1cl284s">
        <label title="If the seed was not reused when the Seed Reuse Generate button was used, it is recommended to increase the value">
          <span data-testid="block-info" style="padding-right: 10px">Reuse delay time</span>
        </label>
        <input
          data-testid="number-input"
          type="number"
          min="1"
          max="5000"
          step="1"
          id="reuse-seed-delay-time"
          class="svelte-1cl284s"
          value="${reuseDelayTime()}"
        >
      </div>
    </div>
  `;

  if (accordions) {
    settings.insertBefore(reuseSeedPlusArea, accordions);
  }

  hiresFixCheckbox.addEventListener("change", handleHiresFixChange);
}

function handleHiresFixChange() {
  const hiresFixCheckbox = document.getElementById(
    "txt2img_hr-visible-checkbox"
  );
  const reuseSeedPlusToggle = document.querySelector(
    "#reuse_seed_plus #rsp_reuse_seed_plus_toggle" // Use of querySelector for conflict avoidance
  );
  const adetailerToggle = document.querySelector(
    "#reuse_seed_plus #rsp_adetailer_toggle" // Use of querySelector for conflict avoidance
  );
  const tiledVaeToggle = document.querySelector(
    "#reuse_seed_plus #rsp_tiled_vae_toggle" // Use of querySelector for conflict avoidance
  );
  // ADetailer
  const targetCheckbox1 =
    document.querySelector("#script_txt2img_adetailer_ad_enable input") ||
    document.querySelector(
      "#script_txt2img_adetailer_ad_main_accordion-visible-checkbox"
    );
  // Tiled VAE
  const targetCheckbox2 = document.getElementById(
    "MDV-t2i-enabled-visible-checkbox"
  );
  const targetButton1 = document.getElementById("txt2img_random_seed");
  const targetButton2 = document.getElementById("txt2img_reuse_seed");

  if (reuseSeedPlusToggle.checked) {
    setTimeout(function () {
      if (hiresFixCheckbox.checked) {
        if (targetCheckbox1) {
          targetCheckbox1.checked = true;
          targetCheckbox1.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (targetButton2) targetButton2.click();
      } else {
        if (targetCheckbox1) {
          targetCheckbox1.checked = false;
          targetCheckbox1.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (targetButton1) targetButton1.click();
      }
    }, 10);
  }

  if (!reuseSeedPlusToggle.checked) {
    if (adetailerToggle.checked) {
      setTimeout(function () {
        if (hiresFixCheckbox.checked) {
          if (targetCheckbox1) {
            targetCheckbox1.checked = true;
            targetCheckbox1.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        } else {
          if (targetCheckbox1) {
            targetCheckbox1.checked = false;
            targetCheckbox1.dispatchEvent(
              new Event("change", { bubbles: true })
            );
          }
        }
      }, 10);
    }
  }

  if (tiledVaeToggle.checked) {
    setTimeout(function () {
      if (hiresFixCheckbox.checked) {
        if (targetCheckbox2) {
          // Use click() because in some cases it does not work with checked,dispatchEvent
          targetCheckbox2.click();
          // console.log(targetCheckbox2.checked);
          setTimeout(function () {
            if (!targetCheckbox2.checked) targetCheckbox2.click();
          }, 5);
        }
      } else {
        if (targetCheckbox2) {
          // Use click() because in some cases it does not work with checked,dispatchEvent
          targetCheckbox2.click();
          // console.log(targetCheckbox2.checked);
          setTimeout(function () {
            if (targetCheckbox2.checked) targetCheckbox2.click();
          }, 5);
        }
      }
    }, 10);
  }
}

// Function Execution
onUiLoaded(function () {
  addNewGenerateButtons();
  createReuseSeedPlusArea();
});
