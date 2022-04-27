<template>
	<div id="modelContainer"></div>
</template>
import * as Cesium from 'cesium/cesium';
<script>
	export default {
		name: "ModelPage",
		mounted() {
			console.log(Cesium)
			console.log(Cesium.Ion)
			Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZGRkMjNkZC0xMDNiLTQ0NWQtOTRmYS01NGNlNTY3YzYwNWMiLCJpZCI6OTA1NzIsImlhdCI6MTY1MDQ0NTUyNH0.7H3KjR9TMpY6w1Rp3Aig0tzc0TJU8Cwy2LMqM8-CbJQ';
			let viewer = new Cesium.Viewer('modelContainer', {
				geocoder: false,
				homeButton: false,
				sceneModePicker: true,
				baseLayerPicker: true,
				navigationHelpButton: false,
				animation: false,
				timeline: false,
				fullscreenButton: false,
				creditsDisplay: false,
				vrButton: false,
				selectionIndicator: false,//关闭绿色框
				 infoBox:false//关闭焦点弹出框
				// skyBox:new Cesium.SkyBox({
				//     sources : {
				//         positiveX : '/static/px.jpg',
				//         negativeX : '/static/nx.jpg',
				//         positiveY : '/static/py.jpg',
				//         negativeY : '/static/ny.jpg',
				//         positiveZ : '/static/pz.jpg',
				//         negativeZ : '/static/nz.jpg'
				//     }
				// })
			});
			//viewer._cesiumWidget._creditContainer.style.display = "none";
			viewer.baseLayerPicker.viewModel.selectedImagery = viewer.baseLayerPicker.viewModel.imageryProviderViewModels[
				6];
			//限制缩放
			viewer.scene.screenSpaceCameraController.maximumZoomDistance = 2500;
			let palaceTileset = new Cesium.Cesium3DTileset({
				url: 'http://localhost:3203/view/structure/29'
			})
			palaceTileset.readyPromise
			  .then(function (tileset) {
			    viewer.scene.primitives.add(tileset);
			    viewer.zoomTo(
			      tileset,
			      new Cesium.HeadingPitchRange(
			        0.0,
			        -0.5,
			        tileset.boundingSphere.radius * 2.0
			      )
			    );
			  })
		}
	}
</script>
<style scoped>
	#modelContainer {
		width: 100%;
		height: 100vh;
		position: absolute;
	}
</style>
