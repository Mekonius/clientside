<template>
        <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon text="A" icon="A" />
            <SideBarIcon text="B" icon="B" />
            <SideBarIcon text="C" icon="C" />
            <SideBarIcon text="D" icon="D" />
            <SideBarIcon text="E" icon="E" />
        </div>
</template>

<script>
    import SideBarIcon from "./SideBarIcon.vue";
    export default {
  components: {
        SideBarIcon
    }
}
</script>