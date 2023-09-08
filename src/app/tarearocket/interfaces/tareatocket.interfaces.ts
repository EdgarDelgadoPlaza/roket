import { Marker } from "mapbox-gl"

/**
 * Archivo centralizado con las interfaces de la pantalla
 */

export interface Response {
    objetos: Tree[]
  }
  
  export interface Tree {
    object_name: string
    object_id: string
    image_url?: string
    nickname: string
    nuberef?: string
    lat: string
    lon: string
  }

  export interface MarkerTree {
    tree: Tree
    marker: Marker
  }