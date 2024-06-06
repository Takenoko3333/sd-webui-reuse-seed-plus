function handleHiresFixChange() {
  const hiresFixCheckbox = document.getElementById(
    "txt2img_hr-visible-checkbox"
  );
  const dynamicCheckbox = document.querySelector(
    "#reuse_seed_plus reuse_seed_plus_toggle"
  );
  const targetCheckbox1 = document.querySelector(
    "#script_txt2img_adetailer_ad_enable input"
  );
  const targetButton1 = document.getElementById("txt2img_random_seed");
  const targetButton2 = document.getElementById("txt2img_reuse_seed");

  if (dynamicCheckbox.checked) {
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
}

function createReuseSeedPlusArea() {
  const reuseSeedPlus = document.getElementById("reuse_seed_plus");
  const hiresFixCheckbox = document.getElementById(
    "txt2img_hr-visible-checkbox"
  );
  const settings = document.getElementById("txt2img_settings");
  const accordions = document.getElementById("txt2img_accordions");

  if (!accordions || reuseSeedPlus) return;

  const reuseSeedPlusArea = document.createElement("div");
  reuseSeedPlusArea.id = "reuse_seed_plus";
  reuseSeedPlusArea.style = "padding: 0.4em 0 0.2em";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "reuse_seed_plus_toggle";
  checkbox.className = "svelte-1ojmf70";

  const label = document.createElement("label");
  label.id = "reuse_seed_plus_label";
  label.className = "svelte-1ojmf70";
  label.style = "display: inline-block;";
  label.setAttribute(
    "title",
    "Enable reuse seed and ADtailer at the same time when enabling Hires.fix"
  );

  const span = document.createElement("span");
  span.className = "ml-2 svelte-1ojmf70";
  span.textContent = "Hires.fix with ♻️ & ADtailer";

  label.appendChild(checkbox);
  label.appendChild(span);
  reuseSeedPlusArea.appendChild(label);

  if (accordions) {
    settings.insertBefore(reuseSeedPlusArea, accordions);
  }

  hiresFixCheckbox.addEventListener("change", handleHiresFixChange);
}

onUiUpdate(createReuseSeedPlusArea);
