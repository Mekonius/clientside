<template>
    <div class="flex">
        <div class="fixed left-0 top-0 h-screen w-16 flex flex-col shadow-lg bg-primary text-secondary">
            <DiscordSidebarIcon icon="AB" text="tooltip 🚀" />
            <DiscordSidebarIcon icon="BC" text="tooltip 🚀" />
            <DiscordSidebarIcon icon="CD" text="tooltip 🚀" />
            <DiscordSidebarIcon icon="DE" text="tooltip 🚀" />
            <DiscordSidebarIcon icon="EF" text="tooltip 🚀" />
        </div>
    </div>
</template>

<script>
import DiscordSidebarIcon from './DiscordSidebarIcon.vue';

export default {
    components: {
        DiscordSidebarIcon
    }
}
</script>