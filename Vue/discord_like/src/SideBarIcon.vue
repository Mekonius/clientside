<template>
    <div class="sidebar-icon group">
        {{ icon }}
        <span class="sidebar-tooltip group-hover:scale-100">
            {{ text }}
        </span>
    </div>
</template>

<script>
export default {
    props: ['icon', 'text']
}
</script>