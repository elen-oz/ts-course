export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1.6,
      center: {
        lat: 0,
        lng: 20,
      },
    });
  }
}
