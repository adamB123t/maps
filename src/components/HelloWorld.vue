<template>
  <div class="map-container">
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 800px"
      @click="closePopup"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature v-for="(coordinate, index) in coordinates" :key="index">
            <div class="icon-container" style="position: relative; z-index: 101;">
              <ol-geom-point :coordinates="getGeometry(coordinate)" />
              <ol-style class="clickable-icon" @click="togglePopup(coordinate)">
                <ol-style-icon :src="customPinIcon" :scale="0.09"></ol-style-icon>
              </ol-style>
            </div>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>

      <ol-overlay v-for="(coordinate, index) in coordinates" :key="index" :position="fromLonLat(coordinate)">
        <div class="circle" @click="circleClicked(coordinate)"></div>
      </ol-overlay>
    </ol-map>

    <div v-if="popupVisible" class="popup" :style="{ left: popupPosition.x + 'px', top: popupPosition.y + 'px' }">
      <div class="popup-content">
        <div class="popup-left">
          <img src="../assets/kick-scooter (1).png" alt="Another Image" class="top-image" />
        </div>
        <div class="popup-right">
          <p class="small-text">Color: {{ popupContent.color }}</p>
          <p class="small-text">Price per hour: {{ popupContent.price }}</p>
          <p class="small-text">Position: {{ popupCoordinate }}</p>
          <button @click="bookNow" class="custom-button">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref } from "vue";
import { fromLonLat } from "ol/proj";
import customPinIcon from "@/assets/electric-scooter_3824605.png";

const instance = getCurrentInstance();
const view = ref(instance.refs.view);

const center = ref(fromLonLat([10.270264, 36.845230]));
const projection = ref("EPSG:3857");
const zoom = ref(16);
const rotation = ref(0.1);
const popupVisible = ref(false);
const popupCoordinate = ref(null);
const popupPosition = ref({ x: 0, y: 0 });
const circleCoordinate = ref(fromLonLat([10.271288, 36.844397])); 

const coordinates = [
  [10.271288, 36.844397],
  [10.271370, 36.845166],
  [10.271144, 36.841823],
  [10.270137, 36.842861],
  [10.276042, 36.843904],
  [10.276585, 36.842606],
  [10.275460, 36.845329],
  [10.263907, 36.845008],
  [10.266719, 36.844627],
  [10.266719, 36.844627]

];

const getGeometry = (coordinate) => {
  return fromLonLat(coordinate);
};

const closePopup = () => {
  popupVisible.value = false;
};
const popupContent = ref({
  color: "Red",
  price: "10 dt",
  image: "../assets/kick-scooter (1).png",
  alt: "Electric Scooter"
});

const togglePopup = (coordinate) => {
  popupVisible.value = !popupVisible.value;
  popupCoordinate.value = coordinate;
  if (popupVisible.value) {
    const pixel = view.value.getPixelFromCoordinate(getGeometry(coordinate));
    popupPosition.value = { x: pixel[0], y: pixel[1] };
  }
};

const circleClicked = () => {
  togglePopup(circleCoordinate.value); // Toggle popup when circle is clicked
};
</script>

<style scoped>
.map-container {
  position: relative;
}

.popup {
  width:25%;
  height: 25%;
  position: fixed;
  padding: 1px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
  z-index: 101;
  transform-origin: top left; /* Adjust the transform origin */
  left: calc(50% - 50px); /* Adjust the left position */
  top: calc(50% - 50px); /* Adjust the top position */
}

.popup-content {
  display: flex; /* Use flexbox for layout */
}

.popup-left {
  border-radius: 20px 0px 0px 20px;

  flex: 1; /* Take up 50% of the width */
  position: relative;
  background-image: url("../assets/aaa.png");
  user-select: none; /* Prevent text selection */


}

.top-image {
  width: 100%; /* Adjust the width */
}

.popup-right {
    flex: 1;
    padding: 20px;
    border-radius: 0 20px 20px 0;
    background-image: url("../assets/aaa.png");
    background-size: cover;
    background-position: center;
    position: relative;
    user-select: none; /* Prevent text selection */

  }

.circle {
  width: 60px; /* Increase the width */
  height: 40px; 
  border-radius: 50%;
  display: flex; /* Correct display value */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  left: -37%;
  top: -30%;
}
.small-text {
  font-size: 1em; /* Font size relative to parent container */
}
.custom-button {
  background-color: #af684c; /* Green background */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em; /* Font size relative to parent container */
  margin: 6px 13px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
