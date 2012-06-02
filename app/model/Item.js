Ext.define('oasis.model.Item', {
    extend: 'Ext.data.Model',
    fields: ['desc', 'qty', 'qty_uom', 'serial_num', 'notes'],
    proxy: {
        type: 'ajax',
        url: 'mock/jobItems.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});