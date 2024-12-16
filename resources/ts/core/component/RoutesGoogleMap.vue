<script setup lang="ts">

import { ref, onMounted } from 'vue';

defineOptions({
    name: 'RoutesGoogleMap',
});

const googleMapsApiKey = ref('AIzaSyCeofdTxksEZQGG5Q7-UeAv0rogv2lkA4E');

// const googleMapsApiKey = ref('AIzaSyCykavRgmm93R8m-H61UZINCe8FW2yEjJc');
const mapRef = ref<HTMLElement | null>(null);


const visits = [
    {
        id: 56542769,
        ref_id: "Start",
        name: "depot",
        address: "Savile Business Centre, Mill Street East, Savile Town, Dewsbury WF12 9AH, England, UK",
        lng: -1.6289012,
        lat: 53.6862183,
        arrival_time: "00:00",
        duration: 0,
        departure_time: "05:00",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408361,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "00:00",
            latest_predicted_departure: "05:00",
            visit_id: 56542769
        },
        latest_predicted_eta: "00:00",
        latest_predicted_departure: "05:00"
    },
    {
        id: 56542770,
        ref_id: "iaxOpeOyx9UP",
        name: "Paige Durant",
        address: "83 Queens Drive, Leicester, England, United Kingdom, LE19 2LL",
        lng: -1.1947924,
        lat: 52.5838228,
        arrival_time: "07:16",
        duration: 10,
        departure_time: "07:26",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408362,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "07:16",
            latest_predicted_departure: "07:26",
            visit_id: 56542770
        },
        latest_predicted_eta: "07:16",
        latest_predicted_departure: "07:26"
    },
    {
        id: 56542771,
        ref_id: "yJJyROlxOs94",
        name: "Joanna Aldridge",
        address: "6 Oak Road, Harpole, Northampton, England, United Kingdom, NN7 4JU",
        lng: -0.9703838,
        lat: 52.239876,
        arrival_time: "08:14",
        duration: 10,
        departure_time: "08:24",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408363,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "08:14",
            latest_predicted_departure: "08:24",
            visit_id: 56542771
        },
        latest_predicted_eta: "08:14",
        latest_predicted_departure: "08:24"
    },
    {
        id: 56542772,
        ref_id: "VLGWO_LSKEjx",
        name: "Nayeli Mundangepfupfu",
        address: "16 Brendon Court, Furzton, Milton Keynes, England, United Kingdom, MK4 1DH",
        lng: -0.7620407,
        lat: 52.0074483,
        arrival_time: "09:04",
        duration: 10,
        departure_time: "09:14",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408364,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "09:04",
            latest_predicted_departure: "09:14",
            visit_id: 56542772
        },
        latest_predicted_eta: "09:04",
        latest_predicted_departure: "09:14"
    },
    {
        id: 56542773,
        ref_id: "zxbkTWhOZmpd",
        name: "Lisa Carr",
        address: "21 Frederick Place, Frogmore, St. Albans, England, United Kingdom, AL2 2FD",
        lng: -0.3336723,
        lat: 51.7185132,
        arrival_time: "10:05",
        duration: 10,
        departure_time: "10:15",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408365,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "10:05",
            latest_predicted_departure: "10:15",
            visit_id: 56542773
        },
        latest_predicted_eta: "10:05",
        latest_predicted_departure: "10:15"
    },
    {
        id: 56542774,
        ref_id: "s4eW49-_Cava",
        name: "carl may",
        address: "269 Sheepcot Lane, Watford, England, United Kingdom, WD25 7DL",
        lng: -0.4037678,
        lat: 51.6945545,
        arrival_time: "10:27",
        duration: 10,
        departure_time: "10:37",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408366,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "10:27",
            latest_predicted_departure: "10:37",
            visit_id: 56542774
        },
        latest_predicted_eta: "10:27",
        latest_predicted_departure: "10:37"
    },
    {
        id: 56542775,
        ref_id: "KZB5TmfY5yD8",
        name: "Kayleigh Robinson",
        address: "29 The Chantry, Uxbridge, England, United Kingdom, UB8 3RA",
        lng: -0.4626319,
        lat: 51.5334742,
        arrival_time: "11:08",
        duration: 10,
        departure_time: "11:18",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408367,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "11:08",
            latest_predicted_departure: "11:18",
            visit_id: 56542775
        },
        latest_predicted_eta: "11:08",
        latest_predicted_departure: "11:18"
    },
    {
        id: 56542776,
        ref_id: "9-LzXmZ5UlH8",
        name: "Antonia Knowles",
        address: "3 moram mews, Datchet road, Old windsor, England, United Kingdom, SL4 2FF",
        lng: -0.5874955,
        lat: 51.4669864,
        arrival_time: "11:41",
        duration: 10,
        departure_time: "11:51",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408368,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "11:41",
            latest_predicted_departure: "11:51",
            visit_id: 56542776
        },
        latest_predicted_eta: "11:41",
        latest_predicted_departure: "11:51"
    },
    {
        id: 56542777,
        ref_id: "mgw2vut98yY2",
        name: "Helen Atkinson",
        address: "23 Robin Hill Drive, Camberley, England, United Kingdom, GU15 1EG",
        lng: -0.7197133,
        lat: 51.3274134,
        arrival_time: "12:23",
        duration: 10,
        departure_time: "12:33",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408369,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "12:23",
            latest_predicted_departure: "12:33",
            visit_id: 56542777
        },
        latest_predicted_eta: "12:23",
        latest_predicted_departure: "12:33"
    },
    {
        id: 56542778,
        ref_id: "-IAdUNgNKd-m",
        name: "Oyin Akinniran",
        address: "54 South Lane, Ash, Aldershot, England, United Kingdom, GU12 6NJ",
        lng: -0.7179527,
        lat: 51.2437285,
        arrival_time: "12:50",
        duration: 10,
        departure_time: "13:00",
        route_id: 2847770,
        vrp_visit_live: {
            id: 40408370,
            completed: false,
            completed_ts: null,
            undeliverable: false,
            latest_predicted_eta: "12:50",
            latest_predicted_departure: "13:00",
            visit_id: 56542778
        },
        latest_predicted_eta: "12:50",
        latest_predicted_departure: "13:00"
    }
];


const IndexLocationsDrivers = ref([
    {
        id: 2847772,
        ref_id: "9xkBYoLhv",
        date: "2024-12-19",
        vehicle: {
            name: "KX68 XKD",
            driver: "Waseem",
            start_lat: 53.6862183,
            start_lng: -1.6289012,
        },
        visits: visits
    },
]);

let map: google.maps.Map | null = null;

const markers = new Map<number, google.maps.Marker>();
const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
};
function plotRoute() {
    IndexLocationsDrivers.value?.forEach((vehicle) => {
        const startLatLng = new google.maps.LatLng(vehicle.vehicle.start_lat, vehicle.vehicle.start_lng);

        // Check if end coordinates are available, otherwise use the start coordinates as the destination
        const endLatLng = vehicle.vehicle.end_lat && vehicle.vehicle.end_lng
            ? new google.maps.LatLng(vehicle.vehicle.end_lat, vehicle.vehicle.end_lng)
            : startLatLng; // Fallback to startLatLng if end coordinates are missing

        const lastVisit = vehicle.visits[vehicle.visits.length - 1];

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
            map: map, // The map to render the route on
            polylineOptions: {
                strokeColor: generateRandomColor(), // Random color for outbound route
                strokeWeight: 5
            }
        });

        // Collect all the visit coordinates and create waypoints
        const waypoints = vehicle.visits.map((visit) => {
            const visitLatLng = new google.maps.LatLng(visit.lat, visit.lng);
            return {
                location: visitLatLng,
                stopover: true
            };
        });

        // Add the start and end locations for the outbound route
        const origin = startLatLng.toUrlValue();
        const destination = endLatLng.toUrlValue();

        // Request the directions for the outbound route
        const request = {
            origin: startLatLng,
            destination: endLatLng,
            waypoints: waypoints,
            optimizeWaypoints: true, // Optimize the order of visits
            travelMode: google.maps.TravelMode.DRIVING
        };

        // Calculate the outbound route and display it on the map
        directionsService.route(request, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(response);
            } else {
                console.error('Error fetching directions for outbound route', status);
            }
        });

        // Request the directions for the return route from the last visit to endLatLng
        const returnRequest = {
            origin: new google.maps.LatLng(lastVisit.lat, lastVisit.lng), // Start from the last visit
            destination: endLatLng, // End at the drop-off point (endLatLng)
            travelMode: google.maps.TravelMode.DRIVING
        };

        const returnDirectionsRenderer = new google.maps.DirectionsRenderer({
            map: map, // The map to render the return route on
            polylineOptions: {
                strokeColor: "#FF0000", // Different color for return route (red)
                strokeWeight: 5
            }
        });

        // Calculate the return route and display it on the map
        directionsService.route(returnRequest, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                returnDirectionsRenderer.setDirections(response);
            } else {
                console.error('Error fetching directions for return route', status);
            }
        });

        // Generate the URL for the driver to open the route in Google Maps (outbound)
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints.map(wp => wp.location.toUrlValue()).join('|')}&travelmode=driving`;

        // Generate the return URL starting from the last visit to endLatLng (drop-off point)
        const returnUrl = `https://www.google.com/maps/dir/?api=1&origin=${new google.maps.LatLng(lastVisit.lat, lastVisit.lng).toUrlValue()}&destination=${endLatLng.toUrlValue()}&travelmode=driving`;

        // Provide both outbound and return URLs to the driver
        alert(`Outbound route: ${googleMapsUrl}\nReturn route: ${returnUrl}`);
    });
}


// Helper function to generate random colors


// Initialize Google Map
const initializeMap = () => {
    if (mapRef.value && window.google && window.google.maps) {
        map = new google.maps.Map(mapRef.value, {
            center: { lat: 53.8008, lng: -1.5491 }, // Center map in Leeds
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
        });

    }
};

const polylines = new Map<number, google.maps.Polyline>();

const previousLocations = new Map<number, google.maps.LatLng>();


const renderDriverHistory = (driver) => {

    if (driver.visits && driver.visits.length > 0) {
        const path = driver.visits.map(
            (location) => new google.maps.LatLng(location.lat, location.lng)
        );

        const lineColor = driver?.color ||  "#007BFF"
        // Create the polyline for historical path
        const historyPolyline = new google.maps.Polyline({
            map,
            strokeColor: lineColor,
            strokeOpacity: 0.6,
            strokeWeight: 4,
            path: path,
        });


        polylines.set(driver.id, historyPolyline);
        previousLocations.set(driver.id, path[path.length - 1]);


    }
};

const createVehicleMarkerDiv = (initials: string , color : string ='#979a9c') => {

    const markerDiv = document.createElement('div');
    Object.assign(markerDiv.style, {
        width: '100px',
        height: '30px',
        borderRadius: '8%',
        overflow: 'hidden',
        border: '2px solid white',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        backgroundColor: color,
    });
    markerDiv.textContent = initials;
    return markerDiv;
};






// Load Google Maps script
const loadGoogleMapsScript = () => {
    return new Promise<void>((resolve, reject) => {
        if (window.google && window.google.maps) {
            return
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


const renderVehicleMarkers = () => {
    IndexLocationsDrivers.value.forEach((location) => {
        const initials = location?.vehicle?.name ? location?.vehicle?.name : 'NA';
        const markerDiv = createVehicleMarkerDiv(initials);

        // Add a class to each marker to identify it for removal later
        markerDiv.classList.add('vehicle-marker');

        // Create the marker without the default pin (set icon to null)
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(location?.vehicle?.start_lat, location?.vehicle?.start_lng),
            map: map,
            title: location?.vehicle?.name,
            draggable: true,

        });

        // InfoWindow content
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div>
                    <h4>${location?.vehicle?.name || 'Unnamed Location'}</h4>
                    <p>Address: ${location?.vehicle?.address || 'Not available'}</p>
                    <p>Lat: ${location?.vehicle?.start_lat}</p>
                    <p>Lng: ${location?.vehicle?.start_lng}</p>
                    <p>Duration: ${location?.vehicle?.duration || 'Not available'}</p>
                    <p>Arrival time: ${location?.vehicle?.arrival_time || 'Not available'}</p>
                    <p>Departure time: ${location?.vehicle?.departure_time || 'Not available'}</p>
                </div>
            `,
        });

        // Open the infoWindow when the marker is clicked
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        // Open the infoWindow when the custom marker div is clicked
        markerDiv.addEventListener('click', () => {
            infoWindow.open(map, marker);
        });

        // Custom marker (overlay view)
        const overlay = new google.maps.OverlayView();
        overlay.onAdd = function () {
            const panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(markerDiv);
        };

        overlay.draw = function () {
            const overlayProjection = this.getProjection();
            const position = overlayProjection.fromLatLngToDivPixel(marker.getPosition());
            markerDiv.style.left = `${position.x - 25}px`; // Adjust the position of the div
            markerDiv.style.top = `${position.y - 25}px`;  // Adjust the position of the div
        };

        overlay.setMap(map); // Attach overlay to the map
    });
};


const renderLocationMarkers = () => {
    IndexLocationsDrivers.value.forEach((location) => {

     location.visits.forEach((visit) => {
         const position = new google.maps.LatLng(visit.lat, visit.lng);
         const locationIcons: Record<string, string> = {
             FACTORY: "\uebbc",
             SHOP: "\ue8d1",
             WAREHOUSE: "\uf1d0",
             DEFAULT: "\ue9fe",
         };

         const pinSvgString = locationIcons[visit.type] || locationIcons.DEFAULT;

         const marker = new google.maps.Marker({
             position,
             map,
             label: {
                 text: pinSvgString,
                 fontFamily: 'Material Icons',
                 color: '#ffffff',
                 fontSize: '18px',
             },
             title: visit.name || 'Location',
         });
         // Optionally add an info window
         const infoWindow = new google.maps.InfoWindow({
             content: `
        <div  >
          <h4>${visit.name || 'Unnamed Location'}</h4>
          <p>address: ${visit?.address}</p>
          <p>Lat: ${visit.lat}</p>
          <p>Lng: ${visit.lng}</p>
          <p>duration: ${visit.duration}</p>
          <p>arrival time: ${visit.arrival_time}</p>
          <p>departure time: ${visit.departure_time}</p>
        </div>
      `,
         });

         marker.addListener('click', () => {
             infoWindow.open(map, marker);
         });
     })
    });
};

// Initialize component
const init = async () => {
    try {

        await loadGoogleMapsScript();
        initializeMap();

        // IndexLocationsDrivers.value.forEach(driver =>renderDriverHistory(driver));
        // renderLocationMarkers()
        renderVehicleMarkers()
        plotRoute();

    } catch (error) {
        console.error(error);
    }
};




onMounted(init);

</script>

<template>
    <div ref="mapRef" style="width: 100%; height: 100vh;"></div>
</template>
