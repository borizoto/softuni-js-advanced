window.addEventListener("load", solve);

function solve() {
  const activityTypeRef = document.getElementById("type");
  const intensityRef = document.getElementById("intensity");
  const caloriesRef = document.getElementById("calories");
  const durationInMinsRef = document.getElementById("duration");
  const dateRef = document.getElementById("date");
  const addBtnRef = document.getElementById("add-activity");
  const previewActivityBoxRef = document.getElementById("preview-activity");
  const activitiesTableRef = document.getElementById("activities-table");

  addBtnRef.addEventListener("click", function () {
    const inputsArr = [activityTypeRef, intensityRef, caloriesRef, durationInMinsRef, dateRef];

    if (inputsArr.some(el => el.value === "")) {
      return;
    }

    previewActivityBoxRef.appendChild(createPreviewElement(activityTypeRef.value, intensityRef.value, caloriesRef.value, durationInMinsRef.value, dateRef.value));

    inputsArr.forEach(element => element.value = "");
    addBtnRef.disabled = true;
  });

  function createPreviewElement(activityType, intensity, calories, durationInMins, dateIn) {
    const previewLiElement = document.createElement("li");
    const article = document.createElement("article");

    const pActivity = document.createElement("p");
    pActivity.textContent = `Activity: ${activityType}`;

    const pIntensity = document.createElement("p");
    pIntensity.textContent = `Intensity: ${intensity}`;

    const pDuration = document.createElement("p");
    pDuration.textContent = `Duration: ${durationInMins} min.`

    const pDate = document.createElement("p");
    pDate.textContent = `Date: ${dateIn}`

    const pCalories = document.createElement("p");
    pCalories.textContent = `Calories: ${calories}`;

    const divEl = document.createElement("div");
    divEl.classList.add("btn-container");

    const editBtnRef = document.createElement("button");
    editBtnRef.classList.add("edit-btn");
    editBtnRef.textContent = "Edit";

    const nextBtnRef = document.createElement("button");
    nextBtnRef.classList.add("next-btn");
    nextBtnRef.textContent = "Next";

    divEl.appendChild(editBtnRef);
    divEl.appendChild(nextBtnRef);

    article.appendChild(pActivity);
    article.appendChild(pIntensity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);

    previewLiElement.appendChild(article);
    previewLiElement.appendChild(divEl);

    editBtnRef.addEventListener("click", function () {
      activityTypeRef.value = activityType;
      intensityRef.value = intensity;
      caloriesRef.value = calories;
      durationInMinsRef.value = durationInMins;
      dateRef.value = dateIn;

      previewLiElement.remove();
      addBtnRef.disabled = false;
    })

    nextBtnRef.addEventListener("click", function (event) {
      
      const tdType = document.createElement("td");
      tdType.classList.add("type-cell");
      tdType.textContent = activityType;
      
      const tdDuration = document.createElement("td");
      tdDuration.classList.add("duration-cell");
      tdDuration.textContent = durationInMins;
      
      const tdCalories = document.createElement("td");
      tdCalories.classList.add("calories-cell");
      tdCalories.textContent = calories;
      
      const tdDate = document.createElement("td");
      tdDate.classList.add("date-cell");
      tdDate.textContent = dateIn;

      const tdIntensity = document.createElement("td");
      tdIntensity.classList.add("intensity-cell");
      tdIntensity.textContent = intensity;
      
      const tdDel = document.createElement("td");
      tdDel.classList.add("btn-cell");
      
      const delBtn = document.createElement("button");
      delBtn.classList.add("delete-btn");
      delBtn.textContent = "Delete";
      
      tdDel.appendChild(delBtn);
      
      const trEl = document.createElement("tr");
      
      trEl.appendChild(tdType);
      trEl.appendChild(tdDuration);
      trEl.appendChild(tdCalories);
      trEl.appendChild(tdDate);
      trEl.appendChild(tdIntensity);
      trEl.appendChild(tdDel);
      
      delBtn.addEventListener("click", function () {
        delBtn.parentElement.parentElement.remove();
      })
      
      activitiesTableRef.appendChild(trEl);

      previewLiElement.remove();
      addBtnRef.disabled = false;
    })

    return previewLiElement;
  }
}
