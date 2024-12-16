<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';

defineOptions({
    name: 'LocationsGoogleMap',
});

interface SerializableZone {
    id: string;
    label: string;
    color: string;
    featureIds: string[];
}

const googleMapsApiKey = ref('AIzaSyCykavRgmm93R8m-H61UZINCe8FW2yEjJc');
const mapRef = ref<HTMLElement | null>(null);

let map: google.maps.Map | null = null;
const selectedZones = ref<SerializableZone[]>([]);
const currentZoneLabel = ref<string>('');

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
};

const saveZone = () => {
    if (!currentZoneLabel.value) {
        alert('Please provide a label for the zone.');
        return;
    }

  const geoJsonExport = exportSelectedZonesAsGeoJSON();
  const geoJsonStr = JSON.stringify(geoJsonExport);
  console.log(geoJsonStr)
  localStorage.setItem('selectedZones', geoJsonStr);

    currentZoneLabel.value = '';
};
// Function to export selected zones as GeoJSON
const exportSelectedZonesAsGeoJSON = () => {
  const geoJsonExport = {
    type: 'FeatureCollection',
    features: selectedZones.value.map(zone => ({
      type: 'Feature',
      properties: {
        id: zone.id,
        label: zone.label,
        color: zone.color,
      },
      geometry: zone.geometry,  // Ensure `geometry` is a valid GeoJSON object
    })),
  };

  // Ensure that geometry is valid
  geoJsonExport.features.forEach(feature => {
    if (!feature.geometry || !feature.geometry.type || !feature.geometry.coordinates) {
      console.warn(`Invalid geometry for zone with ID: ${feature.properties.id}`);
    }
  });

  return geoJsonExport;
};

function extractCoordinatesRecursive(geometry) {
  // Check if the geometry object contains the key `Eg`
  if (Array.isArray(geometry.Eg)) {
    return geometry.Eg.flatMap(subGeometry => extractCoordinatesRecursive(subGeometry));
  }

  // If it's not nested further, assume it's a point with `lat` and `lng`
  if (geometry.lat !== undefined && geometry.lng !== undefined) {
   return [[geometry.lng(), geometry.lat()]];

  }
  return []; // Return empty array if no valid coordinates are found
}
const geoJsonUrls = [
  'https://gist.githubusercontent.com/ahmedMAfani/fd6410b45ac3efa4b3b1ef2bfc742025/raw/1781131a039c6e2b62b64e037b184b230456dbfe/uk-post.json',
  'https://gist.githubusercontent.com/AhmedMAfana/ae0378e981245e0875c4509fe6437cc7/raw/18b17e846fe660c856ecb18d13ab062ffc26b088/ahmed.json',

];
const loadGeoJSONLayer = async () => {

  if (map) {
    try {
      for (const url of geoJsonUrls) {

        const response = await fetch(url);
        if (!response.ok) {
          console.error(`Failed to load GeoJSON from ${url}: ${response.statusText}`);
        }
        const geoJsonData = await response.json();

        // Add the GeoJSON data to the map
        map.data.addGeoJson(geoJsonData);
        // Set the style for the features
        map.data.setStyle((feature) => ({
          fillColor: feature.getProperty('color') || 'gray',
          strokeColor: feature.getProperty('color') || 'gray',
          strokeWeight: 2,
        }));

        // Add event listeners for click, mouseover, and mouseout
        map.data.addListener('click', (event) => {
          const feature = event.feature;
          const zoneId = feature.getProperty('id') || uuidv4();
          feature.setProperty('id', zoneId);

          const existingZoneIndex = selectedZones.value.findIndex((z) => z.id === zoneId);

          if (existingZoneIndex >= 0) {
            // Remove the zone if already selected
            selectedZones.value.splice(existingZoneIndex, 1);
            feature.setProperty('color', 'gray');
            map.data.revertStyle(feature);
          } else {
            // Add the zone to selectedZones
            const randomColor = generateRandomColor();
            feature.setProperty('color', randomColor);

            let coordinates = extractCoordinatesRecursive(feature.getGeometry())
            coordinates = [...coordinates , coordinates[0]]

            selectedZones.value.push({
              id: zoneId,
              label: currentZoneLabel.value || `Zone ${selectedZones.value.length + 1}`,
              color: randomColor,
              geometry: {
                type: "Polygon",
                coordinates: [coordinates],
              },
            });
          }
        });

        map.data.addListener('mouseover', (event) => {
          map.data.overrideStyle(event.feature, { strokeWeight: 5 });
        });

        map.data.addListener('mouseout', (event) => {
          map.data.revertStyle();
        });
      }



    } catch (error) {
      console.error('Error loading GeoJSON:', error);
    }
  }
};

const initializeMap = async () => {
    if (mapRef.value && window.google && window.google.maps) {
        map = new google.maps.Map(mapRef.value, {
            center: { lat: 53.8008, lng: -1.5491 },
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        loadGeoJSONLayer();
    }
};

const loadGoogleMapsScript = () => {
    return new Promise<void>((resolve, reject) => {
        if (window.google && window.google.maps) {
            resolve();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey.value}&libraries=places&`;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Google Maps script'));
            document.head.appendChild(script);
        }
    });
};

const init = async () => {
    try {
        await loadGoogleMapsScript();
        await initializeMap();
    } catch (error) {
        console.error(error);
    }
};

onMounted(init);
</script>

<template>
    <section>
        <section class="row-span-1 bg-white rounded-lg p-2 drop-shadow-sm h-[620px]">
            <q-card flat class="overflow-hidden">
                <q-card-section class="pb-0">
                    <div class="row items-center no-wrap">
                        <div class="col">
                            <div class="md:text-[16px] max-sm:text-[12px] text-bold">LOCATIONS</div>
                        </div>
                        <div class="col-auto flex items-center">
                            <q-btn
                                @click.prevent="$router.push({ name: 'configuration-locations' })"
                                unelevated
                                class="bg-[#F8F8F8] md:text-[12px] max-sm:text-[10px] text-[#929292] rounded-md font-roboto text-left"
                                label="Go to locations"
                            />
                        </div>
                    </div>
                </q-card-section>

                <q-card-section class="absolute left-4 top-20 z-10">
                    <q-card class="p-5">
                        <div>
                            <span class="text-bold text-grey">
                                Zone Label <span class="text-red">*</span>
                            </span>
                            <q-input
                                v-model="currentZoneLabel"
                                outlined
                                label="Location Label"
                                class="col-12 height-50 mt-2"
                            />
                        </div>
                        <div class="justify-between mt-2">
                            <q-btn
                                @click="saveZone"
                                unelevated
                                dense
                                no-caps
                                color="primary"
                                label="Save"
                                class="rounded-lg"
                            />
                        </div>
                    </q-card>
                </q-card-section>

                <q-card-section class="overflow-hidden">
                    <div class="map-container">
                        <div ref="mapRef" class="map"></div>
                    </div>
                </q-card-section>
            </q-card>
            <div>
                <h4>Saved Zones:</h4>
                <ul>
                    <li v-for="zone in selectedZones" :key="zone.id">{{ zone }}</li>
                </ul>
            </div>
        </section>
    </section>
</template>

<style scoped>
.map-container {
    position: relative;
    width: 100%;
    height: 1000px;
}

.map {
    width: 100%;
    height: 100%;
}
</style>
