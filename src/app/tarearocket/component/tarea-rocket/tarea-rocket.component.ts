import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { MarkerTree, Tree } from '../../interfaces/tareatocket.interfaces';
import { LngLat, Marker } from 'mapbox-gl';
import { finalize } from 'rxjs';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-tarea-rocket',
  templateUrl: './tarea-rocket.component.html',
  styleUrls: ['./tarea-rocket.component.css']
})
export class TareaRocketComponent implements OnInit{

  @ViewChild('mapbox') mapBox?: any;

  //@ViewChild('imagetree') image?: any;

  markerTrees: MarkerTree[] = [];

  selectedTree!: MarkerTree;


  constructor( private treeService: TreeService ) {}

  ngOnInit() {
  
    /**
   * Método gatillado en el momento del inicio de la carga del componente.
   * Se usa el servicio inyectado para el llenado del array principal de la pantalla.
   */

    this.treeService.getTreeList()
    .pipe(
      finalize( () => {
        this.selectedTree = this.markerTrees[0];
        this.mapBox.flyTo(this.selectedTree.marker.getLngLat());
      })
    )
    .subscribe(resp => {
      this.markerTrees = resp.map(t => { 
        return {
          tree: {...t, nameLabel: `${t.nickname}: ${t.object_name}`},
          marker: this.newMarker(t.lon, t.lat, t.object_id )
        } 
      });
    })
    
  }

  public newMarker ( lng:string, lat:string, object_id:string) : Marker {

  /**
   * Función que genera un nuevo marker.
   * lng,lat: Corresponden a la dirección del nuevo marker.
   * object_id: es el id único, para realizar el marcado de doble vía, al hacer click en el marcador.
   */
    const viewLngLat = new LngLat(parseFloat(lng), parseFloat(lat))

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const marker = new Marker({ color })
    .setLngLat( viewLngLat )

    marker.getElement().addEventListener('click', (e) => {
      this.goDropdown(marker, object_id)
    });
  
    return marker;
  }

  selectDropdown ( event:any ){
    /*
    método que se gatilla cada que el select-dropdown cambia.
    event: objeto seleccionado tipo Marker.
    */

    if (!this.mapBox) return;

    const { marker } = event.value;
    
    this.mapBox.flyTo(marker.getLngLat())

  }

  goDropdown( marker:Marker, object_id:string) {

  /**
   * Método que iguala la selección del marcador a la del dropdown e imagen.
   * 
   * 
   * marker,lat: Corresponden a la dirección del nuevo marker.
   * object_id: es el id único, para realizar el marcado de doble vía, al hacer click en el marcador.
   */

    this.selectedTree = this.markerTrees?.find(t=> t.tree.object_id == object_id)!;
    this.mapBox.flyTo(marker.getLngLat())
  }
}
