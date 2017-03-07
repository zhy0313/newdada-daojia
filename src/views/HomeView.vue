
<template>
    <flex direction="column">
        <navbar>
            <h5 slot="body">vue-impression</h5>
        </navbar>
        <flex-item>
            <group-title>Hello, impression!</group-title>
            <group>
                <cell to="counter">Counter</cell>
                <cell to="square">Square</cell>
                <cell to="search">search</cell>
            </group>
        </flex-item>
        <router-link to="/address"><p style="height:40px;line-height:40px;">进行地址选择</p></router-link>
    </flex>
</template>
