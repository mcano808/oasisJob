Ext.define('oasis.view.toptab.JobTab', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobtab',

    initComponent: function(){
        this.layout = 'hbox';
        this.title = 'Job';
        //this.html ='Something in here...';
        this.items = [this.column1(), this.column2(), this.column3()];

        return this.callParent(arguments);
    },

    column1: function() {
        return {
            flex:5,
            bodyStyle: 'padding:5px',
            layout: 'anchor',
            items:[{
                xtype: 'textfield',
                anchor: '100%',
                name: 'job_name',
                emptyText: 'Job Name',
                allowBlank: false
            },{
                xtype: 'textfield',
                anchor: '100%',
                name: 'job_number',
                emptyText: 'Job #',
                allowBlank: false
            },{
                xtype: 'textfield',
                anchor: '100%',
                name:'street_number',
                emptyText: 'Street',
                allowBlank: false
            },{
                xtype:'container',
                layout: 'hbox',
                items:[{
                    xtype: 'textfield',
                    flex: 4,
                    name:'city',
                    emptyText: 'City',
                    allowBlank: false
                },{
                    xtype: 'textfield',
                    flex: 1,
                    name: 'state',
                    emptyText:'State',
                    allowBlank:false
                },{
                    xtype: 'textfield',
                    flex: 2,
                    name: 'zipcode',
                    emptyText:'Zipcode',
                    allowBlank: false
                }]

            }]

        };
    },

    column2: function(){
        return {
            flex: 5,
            bodyStyle: 'padding:15px',
            layout: 'anchor',
            items:[{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    name: 'jo_project_poc',
                    flex:2,
                    emptyText: 'Project POC'
                },{
                    xtype: 'textfield',
                    name: 'jo_phine_num',
                    flex:1,
                    emptyText: 'Phone #'
                },{
                    xtype: 'button',
                    iconCls: 'icon-book'
                }]
            },{
                xtype:'textfield',
                anchor: '100%',
                name:'jo_ref_number',
                emptyText:"Ref #(Customer's)"
            },{
                xtype: 'textfield',
                anchor: '100%',
                name: 'jo_po_number',
                emptyText: 'PO #'
            },{
                xtype: 'container',
                layout: 'hbox',
                anchor: '100%',
                items: [{
                    xtype:'button',
                    flex: 1,
                    text: 'Contacts',
                    iconCls:'icon-book'
                },{
                    xtype: 'button',
                    flex:1,
                    text: 'Status',
                    iconCls: 'icon-status'
                },{
                    xtype: 'button',
                    flex: 1,
                    text: 'Documents',
                    iconCls: 'icon-docs'
                }]

            }]
        };
    },
    column3: function(){
        return{
            flex:3,
            bodyStyle: 'padding:15px',
            layout:'anchor',
            items: [{
                xtype: 'textareafield',
                name: 'jo_notes',
                emptyText: 'Job Notes...',
                anchor: '100%'

            }]

        };
    }
});