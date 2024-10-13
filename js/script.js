document.querySelectorAll(".carousel").forEach((carousel) => {
  let currentIndex = 0;
  const itemsEl = carousel.querySelector(".items");
  const items = itemsEl.querySelectorAll(".item");
  const btnElementP = carousel.querySelector(".prev");
  const btnELementN = carousel.querySelector(".next");

  btnElementP.addEventListener("click", function () {
    move(-1);
  });

  btnELementN.addEventListener("click", function () {
    move(1);
  });

  items.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentIndex = index;

      updateItems();
    });
  });

  function move(direction) {
    currentIndex += direction + items.length;
    currentIndex %= items.length;

    updateItems();
  }
  function updateItems() {
    itemsEl.style.setProperty("--current", currentIndex);
    items.forEach((item, index) => {
      item.classList.toggle("active", currentIndex == index);
    });
  }
});

// range
function updateGradient(slider) {
  // مقدار درصد را محاسبه کنید
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  // به عنصر CSS یک متغیر برای رنگ‌ها اضافه کنید
  slider.style.setProperty("--value", value + "%");
}
// مقدار اولیه رنگ نوار را تنظیم کنید
document.querySelector(".range").addEventListener("input", function () {
  updateGradient(this);
});
// برای بارگذاری اولیه
window.onload = function () {
  document.querySelectorAll(".range").forEach(updateGradient);
};

//
//
