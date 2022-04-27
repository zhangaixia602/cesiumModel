<template>
	<div id="cesiumContainer"></div>
</template>
<script>
	export default {
		name: "HomePage",
		mounted() {
			let viewer = new Cesium.Viewer('cesiumContainer', {
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
			viewer._cesiumWidget._creditContainer.style.display = "none";
			viewer.baseLayerPicker.viewModel.selectedImagery = viewer.baseLayerPicker.viewModel.imageryProviderViewModels[
				6];
			      let redBox = viewer.entities.add({
			          name : 'Red box with black outline',
			          position:Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706),
			          model : {
			              uri : '/static/cityhome.glb'
			          }
			      });
			viewer.trackedEntity = redBox;
			// let palaceTileset = new Cesium.Cesium3DTileset({
			// 	url: '/static/tileset.json'
			// })
			// viewer.scene.primitives.add(palaceTileset);
		}
	}
</script>
<style scoped>
	#cesiumContainer {
		width: 100%;
		height: 100vh;
		position: absolute;
	}
</style>
