const filt1 = document.getElementById("field_1");
const filt2 = document.getElementById("field_2");
const filt3 = document.getElementById("field_3");
const filt4 = document.getElementById("field_4");
const filt5 = document.getElementById("field_5");
var items_ultra = [];
filt1.addEventListener("change", (event) => {
  items_ultra = priceFilter(items);
});
filt2.addEventListener("change", (event) => {
  items_ultra = colorFilter(items);
});
filt3.addEventListener("change", (event) => {
  items_ultra = memoryFilter(items);
});
filt4.addEventListener("change", (event) => {
  items_ulta = osFilter(items);
});
filt5.addEventListener("change", (event) => {
  items_ulta = displayFilter(items);
});
function priceFilter(items) {
  const new_items = [];

  const p1 = document.getElementById("p_1");
  const p2 = document.getElementById("p_2");

  if (!p1.value || !p2.value || p2.value <= p1.value) {
    displayGoods(items);
    return new_items;
  } else {
    for (let i = 0; i < items.length; i++) {
      if (items[i].price >= p1.value && items[i].price <= p2.value) {
        new_items.push(items[i]);
      }
    }
  }
  displayGoods(new_items);
  return new_items;
}
function osFilter(items) {
  const new_items = [];

  const os1 = document.getElementById("os_ios");
  const os2 = document.getElementById("os_mac");
  const os3 = document.getElementById("os_tv");
  const os4 = document.getElementById("os_watch");
  if (!os1.checked && !os2.checked && !os3.checked && !os4.checked) {
    displayGoods(items);
    return new_items;
  } else {
    for (let i = 0; i < items.length; i++) {
      if (
        (os1.checked && items[i].os === os1.value) ||
        (os2.checked && items[i].os === os2.value) ||
        (os3.checked && items[i].os === os3.value) ||
        (os4.checked && items[i].os === os4.value)
      ) {
        new_items.push(items[i]);
      }
    }
  }
  displayGoods(new_items);
  return new_items;
}
function memoryFilter(items) {
  const new_items = [];

  const m1 = document.getElementById("m32");
  const m2 = document.getElementById("m64");
  const m3 = document.getElementById("m128");
  const m4 = document.getElementById("m256");
  const m5 = document.getElementById("m512");
  const m6 = document.getElementById("m1");
  const m7 = document.getElementById("m2");
  const m8 = document.getElementById("m4");

  if (
    !m1.checked &&
    !m2.checked &&
    !m3.checked &&
    !m4.checked &&
    !m5.checked &&
    !m6.checked &&
    !m7.checked &&
    !m8.checked
  ) {
    displayGoods(items);
    return new_items;
  } else {
    for (let i = 0; i < items.length; i++) {
      if (
        (m1.checked && String(items[i].storage) === m1.value) ||
        (m2.checked && String(items[i].storage) === m2.value) ||
        (m3.checked && String(items[i].storage) === m3.value) ||
        (m4.checked && String(items[i].storage) === m4.value) ||
        (m5.checked && String(items[i].storage) === m5.value) ||
        (m6.checked && String(items[i].storage) === m6.value) ||
        (m7.checked && String(items[i].storage) === m7.value) ||
        (m8.checked && String(items[i].storage) === m8.value)
      ) {
        new_items.push(items[i]);
      }
    }
  }

  displayGoods(new_items);
  return new_items;
}
function colorFilter(items) {
  const new_items = [];

  const c1 = document.getElementById("c_red");
  const c2 = document.getElementById("c_black");
  const c3 = document.getElementById("c_blue");
  const c4 = document.getElementById("c_gold");
  const c5 = document.getElementById("c_green");
  const c6 = document.getElementById("c_white");
  const c7 = document.getElementById("c_grey");
  const c8 = document.getElementById("c_yellow");

  if (
    !c1.checked &&
    !c2.checked &&
    !c3.checked &&
    !c4.checked &&
    !c5.checked &&
    !c6.checked &&
    !c7.checked &&
    !c8.checked
  ) {
    displayGoods(items);
    return new_items;
  } else {
    for (let i = 0; i < items.length; i++) {
      if (
        (c1.checked && items[i].color.includes(c1.value)) ||
        (c2.checked && items[i].color.includes(c2.value)) ||
        (c3.checked && items[i].color.includes(c3.value)) ||
        (c4.checked && items[i].color.includes(c4.value)) ||
        (c5.checked && items[i].color.includes(c5.value)) ||
        (c6.checked && items[i].color.includes(c6.value)) ||
        (c7.checked && items[i].color.includes(c7.value)) ||
        (c8.checked && items[i].color.includes(c8.value))
      ) {
        new_items.push(items[i]);
      }
    }
  }

  displayGoods(new_items);
  return new_items;
}
function displayFilter(items) {
  const new_items = [];
  const d1 = document.getElementById("d_1");
  const d2 = document.getElementById("d_2");
  const d3 = document.getElementById("d_3");
  const d4 = document.getElementById("d_4");
  const d5 = document.getElementById("d_5");

  if (!d1.checked && !d2.checked && !d3.checked && !d4.checked && !d5.checked) {
    displayGoods(items);
    return new_items;
  } else {
    for (let i = 0; i < items.length; i++) {
      if (
        (d1.checked && items[i].display >= 2 && items[i].display < 5) ||
        (d2.checked && items[i].display >= 5 && items[i].display < 7) ||
        (d3.checked && items[i].display >= 7 && items[i].display < 12) ||
        (d4.checked && items[i].display >= 12 && items[i].display < 16) ||
        (d5.checked && items[i].display >= 16)
      ) {
        new_items.push(items[i]);
      }
    }
  }

  displayGoods(new_items);
  return new_items;
}
