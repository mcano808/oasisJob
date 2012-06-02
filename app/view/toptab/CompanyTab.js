Ext.define('oasis.view.toptab.CompanyTab', {
    extend: 'Ext.form.Panel',
    alias: 'widget.companytab',

    initComponent: function (){
        this.title = 'Company';
        this.layout = 'hbox';
        this.items = [this.column1(), this.column2()];

        return this.callParent(arguments);
    },

    column1: function (){

        return {
            flex:1,
            bodyStyle:'padding:5px',
            layout:'anchor',
            items:[{
                xtype:'textfield',
                anchor:'100%',
                name:'co_name',
                emptyText:'Company Name',
                allowBlank:false
            },{
                xtype:'textfield',
                anchor:'100%',
                name:'co_number',
                emptyText:'Customer #',
                allowBlank:false
            },{
                xtype:'textfield',
                anchor:'100%',
                name:'co_street_number',
                emptyText:'Street',
                allowBlank:false
            },{
                xtype:'container',
                layout:'hbox',
                items:[{
                    xtype:'textfield',
                    flex:4,
                    name:'co_city',
                    emptyText:'City',
                    allowBlank:false
                },{
                    xtype:'textfield',
                    flex:1,
                    name:'co_state',
                    emptyText:'State',
                    allowBlank:false
                },{
                    xtype:'textfield',
                    flex:2,
                    name:'co_zipcode',
                    emptyText:'Zipcode',
                    allowBlank:false
                }]

            }]
        };
    },

    column2: function(){
        return {
            flex:1,
            bodyStyle: 'padding:5px',
            layout: 'anchor',
            items: [{
                xtype: 'textareafield',
                anchor: '100%',
                emptyText: 'Notes regarding this company...'
            }]
        }
    }

});