import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';
import { MarkerTree, Tree } from '../../interfaces/tareatocket.interfaces';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements AfterViewInit {

  /**
   * Componente que maneja el mapa.
   * recibe por parámetro del componente Padre tarearocket, el array completo de la pantalla (markerTrees).
   * recibe por parámetro del componente Padre tarearocket, el arbol seleccionado (selectedTree).
   * Usa ViewChild para la manipulación del objeto de mapa (mapBox)
   */

  @ViewChild('map') divMap?: ElementRef;
  @Input() selectedTree?: Tree;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-71.542969, -35.675147);

  @Input() markerTrees?: MarkerTree [];

  ngAfterViewInit ():void {

    /**
   * Método ejecutado después de la carga del componente.
   * Se usa, dado que el mapbox debe cargarse completamente primero.
   */

    if (!this.divMap) throw 'El elemento HTML no fue encontrado (Mapbox)';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 6,
    });

    this.markerTrees?.forEach(markertree => {
      const { marker } = markertree;

      marker.addTo( this.map! )
    })

    this.flyTo(this.markerTrees![0].marker.getLngLat())

  }

  public addMarker ( marker: Marker) {
    /**
   * Método para añadir un marcador al mapa
   * recibe como párametro un marcador nuevo, sin referencia
   */
    if ( !this.map ) return;
    marker.addTo( this.map )
  }

  public setCenter ( lngLat : LngLat ) {
    /**
   * Método usado para centrar el mapa
   * Recibe por parametro la dirección
   */

    if (!this.map) return;
    this.map?.setCenter(lngLat);
  }

  public flyTo ( lngLat : LngLat ) {

     /**
   * Método usado para centrar el mapa añadiendo el efecto de "acercar"
   * Recibe por parametro la dirección
   */

    if (!this.map) return;

    this.map.flyTo({
      zoom: 10,
      center: lngLat
    })
  }
}
