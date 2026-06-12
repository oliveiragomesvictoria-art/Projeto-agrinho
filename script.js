const regionName = document.getElementById('regionName');
const impactLevel = document.getElementById('impactLevel');
const mainCrop = document.getElementById('mainCrop');
const regions = document.querySelectorAll('.region');

regions.forEach((region) => {
  region.addEventListener('click', () => {
    regions.forEach((item) => item.classList.remove('active'));
    region.classList.add('active');

    regionName.textContent = region.dataset.name;
    impactLevel.textContent = region.dataset.impact;
    mainCrop.textContent = region.dataset.crop;
  });
});

if (regions[0]) regions[0].click();