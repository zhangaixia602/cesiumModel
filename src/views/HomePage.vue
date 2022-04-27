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
			viewer._cesiumWidget._creditContainer.style.display = "none";
			viewer.baseLayerPicker.viewModel.selectedImagery = viewer.baseLayerPicker.viewModel.imageryProviderViewModels[
				6];
			let redBox = viewer.entities.add({
				name: 'Red box with black outline',
				position: Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706),
				model: {
					uri: '/static/cityhome.glb'
				}
			});
			//动态跟踪实物
			viewer.trackedEntity = redBox;
			//限制缩放
			viewer.scene.screenSpaceCameraController.maximumZoomDistance = 2500;
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
