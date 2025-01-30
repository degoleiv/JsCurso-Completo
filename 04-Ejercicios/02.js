/**
 * Nombre: ancho x alto
 *  8k 7680 x 4320
 *  4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
function nombreResolucion(ancho, alto) {
  resolutions = {
    "8k": [7680, 4320],
    "4k": [3840, 2160],
    WQHD: [2560, 1440],
    FHD: [1920 ,1080],
    HD: [1280, 720],
  };

  res = '';

  for (r in resolutions){
    res_flag = resolutions[r];
    ancho_res = res_flag[0];
    largo_res = res_flag[1];
    if(ancho_res <= ancho  && largo <= alto ){
        res = r;
        break;
    }
}
    return "resolution not found"
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);
