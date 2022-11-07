export default (Vue)=>{
    Vue.directive('mustInteger', {
        update: function(el, vDir, vNode) {
            el.addEventListener('keyup', function(e) {
                e = e || window.event;
                var obj = e.target;
                obj.value = obj.value.replace('.', '').replace('-', '');
                vNode.data.model.callback(obj.value);
            });
            el.addEventListener('click', function(e) {
                e = e || window.event;
                var obj = e.target;
                obj.value = obj.value.replace('.', '').replace('-', '');
                vNode.data.model.callback(obj.value);
            });
        },
    });
}