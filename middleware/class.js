export default function ({ store, route }) {
    store.commit("SetClass", route.name);
}
