Ext.define('oasis.view.BottomGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bottomgrid',
    requires: 'oasis.store.Items',

    initComponent: function(){
        this.model = this.makeModel();
        this.store = this.makeStore();
        this.columns = [{
            text: 'Description',
            dataIndex: 'desc',
            sortable: true,
            flex: 5
        },{
            text: 'Qty',
            dataIndex: 'qty',
            sortable: true,
            flex:1
        },{
            text: 'Serial #',
            dataIndex: 'serial_num',
            sortable: true,
            flex: 2
        },{
            text: 'UoM',
            dataIndex: 'qty_uom',
            sortable: false,
            flex: 1
        }, {
            text: 'notes',
            dataIndex: 'notes',
            sortable: false,
            flex:3
        }];
        this.viewConfig = {
            forceFit: true
        };
        return this.callParent(arguments);
    },

    makeStore: function(){

      var store= Ext.create ('Ext.data.Store', {
          model: 'items',
          proxy: {
              type: 'ajax',
              url: 'mock/jobItems.json',
              reader: {
                  type: 'json',
                  root:'items'
              }
          },
          autoLoad: true
      });
      return store;
    },

    makeModel: function(){
        Ext.define('items', {
            extend: 'Ext.data.Model',
            fields: ['desc', 'qty', 'qty_uom', 'serial_num', 'notes']
        })
    }
});