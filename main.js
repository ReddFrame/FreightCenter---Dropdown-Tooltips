var listObj = new ej.dropdowns.DropDownList({
    dataSource: [
        { id: '1', text: 'Business (with a dock or forklift)', content: 'Limited access locations can include storage units, restaurants and bars, military bases or other facilities where access is restricted, farms or agricultural sites, and other locations.' },
        { id: '2', text: 'Business (without a dock or forklift)', content: '' },
        { id: '3', text: 'Freight carrier terminal', content: '' },
        { id: '4', text: 'Limited access location', content: '' },
        { id: '5', text: 'Residential area', content: '' },
        { id: '6', text: 'Tradeshow or convention', content: '' },
    ],
    fields: { text: 'text', tooltip: 'id' },
    placeholder: 'Choose Destination Facility Type',
    close: () => { tooltip.close(); }
});
listObj.appendTo('#ddltooltip');
var tooltip = new ej.popups.Tooltip({
    content: 'Loading...',
    target: '.e-list-item',
    position: 'top center',
    beforeRender: onBeforeRender
});
tooltip.appendTo('body');
function onBeforeRender(args) {
    var listElement = document.getElementById('ddltooltip');
    var result = listElement.ej2_instances[0].dataSource;
    var i;
    for (i = 0; i < result.length; i++) {
        if (result[i].text === args.target.textContent) {
            this.content = result[i].content;
            this.dataBind();
            break;
        }
    }
}
