<template>
	<div id="modelContainer"></div>
</template>
<script>
	export default {
		name: "ModelPage",
		mounted() {
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
				selectionIndicator: false, //关闭绿色框
				infoBox: false //关闭焦点弹出框
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
			//限制缩放
			viewer.scene.screenSpaceCameraController.maximumZoomDistance = 2500;
			let tileset = new Cesium.Cesium3DTileset({
				//url: 'http://localhost:3203/view/structure/29'
				url:'http://localhost:8081/static/models/tileset.json'
			})
			viewer.scene.primitives.add(tileset);
			console.log(viewer.scene)
			const initialPosition = new Cesium.Cartesian3(
			  -1111583.3721328347,
			  -5855888.151574568,
			  2262561.444696748
			);
			const initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(
			  100.0,
			  -15.0,
			  0.0
			);
			viewer.scene.camera.setView({
			  destination: initialPosition,
			  orientation: initialOrientation,
			  endTransform: Cesium.Matrix4.IDENTITY,
			});
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
