export const LABELS_TEXT_FILL = 'labels.text.fill'

export const ZOOM_NUMBER = 14

export const MapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
]

export const MapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  scaleControl: false,
  zoomControl: false,
  styles: MapStyles,
  disableDefaultUI: true,
}

export const MapContainerStyle = {
  height: '100%',
  width: '100%',
  position: 'relative',
}

export const MarkerIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBpbiBtYXAiPgo8ZyBpZD0iU3VidHJhY3QiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDM4LjMzMzRDMjAgMzguMzMzNCAzNSAyOC4zMzM0IDM1IDE2LjY2NjdDMzUgMTIuNjg4NSAzMy40MTk2IDguODczMTkgMzAuNjA2NiA2LjA2MDE1QzI3Ljc5MzYgMy4yNDcxIDIzLjk3ODIgMS42NjY3NSAyMCAxLjY2Njc1QzE2LjAyMTggMS42NjY3NSAxMi4yMDY0IDMuMjQ3MSA5LjM5MzQgNi4wNjAxNUM2LjU4MDM1IDguODczMTkgNSAxMi42ODg1IDUgMTYuNjY2N0M1IDI4LjMzMzQgMjAgMzguMzMzNCAyMCAzOC4zMzM0Wk0yNSAxNi42NjY3QzI1IDE5LjQyODIgMjIuNzYxNCAyMS42NjY3IDIwIDIxLjY2NjdDMTcuMjM4NiAyMS42NjY3IDE1IDE5LjQyODIgMTUgMTYuNjY2N0MxNSAxMy45MDUzIDE3LjIzODYgMTEuNjY2NyAyMCAxMS42NjY3QzIyLjc2MTQgMTEuNjY2NyAyNSAxMy45MDUzIDI1IDE2LjY2NjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAgMzguMzMzNEwxOS43MjI2IDM4Ljc0OTRDMTkuODkwNiAzOC44NjE0IDIwLjEwOTQgMzguODYxNCAyMC4yNzc0IDM4Ljc0OTRMMjAgMzguMzMzNFpNMzAuNjA2NiA2LjA2MDE1TDMwLjI1MyA2LjQxMzdMMzAuNjA2NiA2LjA2MDE1Wk05LjM5MzQgNi4wNjAxNUw5Ljc0Njk1IDYuNDEzN0w5LjM5MzQgNi4wNjAxNVpNMzQuNSAxNi42NjY3QzM0LjUgMjIuMjk5MSAzMC44NjcxIDI3LjU5MzkgMjcuMTM3IDMxLjUzMTJDMjUuMjgyMiAzMy40ODkxIDIzLjQyNTcgMzUuMDg3OSAyMi4wMzIzIDM2LjE5NzVDMjEuMzM2IDM2Ljc1MTkgMjAuNzU2NCAzNy4xODM0IDIwLjM1MTggMzcuNDc1NkMyMC4xNDk1IDM3LjYyMTcgMTkuOTkxMSAzNy43MzI5IDE5Ljg4MzggMzcuODA3MkMxOS44MzAxIDM3Ljg0NDQgMTkuNzg5MyAzNy44NzIzIDE5Ljc2MjEgMzcuODkwOEMxOS43NDg1IDM3LjkgMTkuNzM4NCAzNy45MDY4IDE5LjczMTggMzcuOTExM0MxOS43Mjg0IDM3LjkxMzUgMTkuNzI2IDM3LjkxNTEgMTkuNzI0NSAzNy45MTYxQzE5LjcyMzcgMzcuOTE2NyAxOS43MjMyIDM3LjkxNyAxOS43MjI5IDM3LjkxNzJDMTkuNzIyNyAzNy45MTczIDE5LjcyMjcgMzcuOTE3NCAxOS43MjI2IDM3LjkxNzRDMTkuNzIyNiAzNy45MTc0IDE5LjcyMjYgMzcuOTE3NCAyMCAzOC4zMzM0QzIwLjI3NzQgMzguNzQ5NCAyMC4yNzc1IDM4Ljc0OTMgMjAuMjc3NyAzOC43NDkyQzIwLjI3NzkgMzguNzQ5MSAyMC4yNzgyIDM4Ljc0ODkgMjAuMjc4NSAzOC43NDg3QzIwLjI3OTEgMzguNzQ4MyAyMC4yNzk5IDM4Ljc0NzcgMjAuMjgxIDM4Ljc0N0MyMC4yODMxIDM4Ljc0NTYgMjAuMjg2MSAzOC43NDM2IDIwLjI5IDM4Ljc0MUMyMC4yOTc4IDM4LjczNTcgMjAuMzA5MiAzOC43MjggMjAuMzI0IDM4LjcxOEMyMC4zNTM2IDM4LjY5NzkgMjAuMzk2OSAzOC42NjgyIDIwLjQ1MzEgMzguNjI5M0MyMC41NjU2IDM4LjU1MTQgMjAuNzI5NCAzOC40MzY0IDIwLjkzNzMgMzguMjg2M0MyMS4zNTMgMzcuOTg2IDIxLjk0NTMgMzcuNTQ1MSAyMi42NTUyIDM2Ljk3OThDMjQuMDc0MyAzNS44NDk3IDI1Ljk2NzggMzQuMjE5NCAyNy44NjMgMzIuMjE5QzMxLjYzMjkgMjguMjM5NiAzNS41IDIyLjcwMSAzNS41IDE2LjY2NjdIMzQuNVpNMzAuMjUzIDYuNDEzN0MzMi45NzIzIDkuMTMyOTggMzQuNSAxMi44MjExIDM0LjUgMTYuNjY2N0gzNS41QzM1LjUgMTIuNTU1OSAzMy44NjcgOC42MTM0MSAzMC45NjAyIDUuNzA2NTlMMzAuMjUzIDYuNDEzN1pNMjAgMi4xNjY3NUMyMy44NDU2IDIuMTY2NzUgMjcuNTMzOCAzLjY5NDQyIDMwLjI1MyA2LjQxMzdMMzAuOTYwMiA1LjcwNjU5QzI4LjA1MzMgMi43OTk3OCAyNC4xMTA5IDEuMTY2NzUgMjAgMS4xNjY3NVYyLjE2Njc1Wk05Ljc0Njk1IDYuNDEzN0MxMi40NjYyIDMuNjk0NDIgMTYuMTU0NCAyLjE2Njc1IDIwIDIuMTY2NzVWMS4xNjY3NUMxNS44ODkxIDEuMTY2NzUgMTEuOTQ2NyAyLjc5OTc4IDkuMDM5ODQgNS43MDY1OUw5Ljc0Njk1IDYuNDEzN1pNNS41IDE2LjY2NjdDNS41IDEyLjgyMTEgNy4wMjc2NyA5LjEzMjk4IDkuNzQ2OTUgNi40MTM3TDkuMDM5ODQgNS43MDY1OUM2LjEzMzAzIDguNjEzNDEgNC41IDEyLjU1NTkgNC41IDE2LjY2NjdINS41Wk0yMCAzOC4zMzM0QzIwLjI3NzQgMzcuOTE3NCAyMC4yNzc0IDM3LjkxNzQgMjAuMjc3NCAzNy45MTc0QzIwLjI3NzMgMzcuOTE3NCAyMC4yNzczIDM3LjkxNzMgMjAuMjc3MSAzNy45MTcyQzIwLjI3NjggMzcuOTE3IDIwLjI3NjMgMzcuOTE2NyAyMC4yNzU1IDM3LjkxNjFDMjAuMjc0IDM3LjkxNTEgMjAuMjcxNiAzNy45MTM1IDIwLjI2ODIgMzcuOTExM0MyMC4yNjE2IDM3LjkwNjggMjAuMjUxNSAzNy45IDIwLjIzNzkgMzcuODkwOEMyMC4yMTA3IDM3Ljg3MjMgMjAuMTY5OSAzNy44NDQ0IDIwLjExNjIgMzcuODA3MkMyMC4wMDg5IDM3LjczMjkgMTkuODUwNSAzNy42MjE3IDE5LjY0ODIgMzcuNDc1NkMxOS4yNDM2IDM3LjE4MzQgMTguNjY0IDM2Ljc1MTkgMTcuOTY3NyAzNi4xOTc1QzE2LjU3NDMgMzUuMDg3OSAxNC43MTc4IDMzLjQ4OTEgMTIuODYzIDMxLjUzMTJDOS4xMzI4NyAyNy41OTM5IDUuNSAyMi4yOTkxIDUuNSAxNi42NjY3SDQuNUM0LjUgMjIuNzAxIDguMzY3MTMgMjguMjM5NiAxMi4xMzcgMzIuMjE5QzE0LjAzMjIgMzQuMjE5NCAxNS45MjU3IDM1Ljg0OTcgMTcuMzQ0OCAzNi45Nzk4QzE4LjA1NDcgMzcuNTQ1MSAxOC42NDcgMzcuOTg2IDE5LjA2MjcgMzguMjg2M0MxOS4yNzA2IDM4LjQzNjQgMTkuNDM0NCAzOC41NTE0IDE5LjU0NjkgMzguNjI5M0MxOS42MDMxIDM4LjY2ODIgMTkuNjQ2NCAzOC42OTc5IDE5LjY3NiAzOC43MThDMTkuNjkwOCAzOC43MjggMTkuNzAyMiAzOC43MzU3IDE5LjcxIDM4Ljc0MUMxOS43MTM5IDM4Ljc0MzYgMTkuNzE2OSAzOC43NDU2IDE5LjcxOSAzOC43NDdDMTkuNzIwMSAzOC43NDc3IDE5LjcyMDkgMzguNzQ4MyAxOS43MjE1IDM4Ljc0ODdDMTkuNzIxOCAzOC43NDg5IDE5LjcyMjEgMzguNzQ5MSAxOS43MjIzIDM4Ljc0OTJDMTkuNzIyNSAzOC43NDkzIDE5LjcyMjYgMzguNzQ5NCAyMCAzOC4zMzM0Wk0yMCAyMi4xNjY3QzIzLjAzNzYgMjIuMTY2NyAyNS41IDE5LjcwNDMgMjUuNSAxNi42NjY3SDI0LjVDMjQuNSAxOS4xNTIgMjIuNDg1MyAyMS4xNjY3IDIwIDIxLjE2NjdWMjIuMTY2N1pNMTQuNSAxNi42NjY3QzE0LjUgMTkuNzA0MyAxNi45NjI0IDIyLjE2NjcgMjAgMjIuMTY2N1YyMS4xNjY3QzE3LjUxNDcgMjEuMTY2NyAxNS41IDE5LjE1MiAxNS41IDE2LjY2NjdIMTQuNVpNMjAgMTEuMTY2N0MxNi45NjI0IDExLjE2NjcgMTQuNSAxMy42MjkyIDE0LjUgMTYuNjY2N0gxNS41QzE1LjUgMTQuMTgxNSAxNy41MTQ3IDEyLjE2NjcgMjAgMTIuMTY2N1YxMS4xNjY3Wk0yNS41IDE2LjY2NjdDMjUuNSAxMy42MjkyIDIzLjAzNzYgMTEuMTY2NyAyMCAxMS4xNjY3VjEyLjE2NjdDMjIuNDg1MyAxMi4xNjY3IDI0LjUgMTQuMTgxNSAyNC41IDE2LjY2NjdIMjUuNVoiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8L3N2Zz4K'
