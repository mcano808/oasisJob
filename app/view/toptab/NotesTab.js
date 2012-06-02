Ext.define('oasis.view.toptab.NotesTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.notestab',

    initComponent: function(){
        this.title = 'Notes';
        this.layout = 'anchor';
        this.items = [{
            xtype: 'textareafield',
            anchor: '100%',
            name: 'company_notes',
            emptyText: 'Company notes...'
        }];
        return this.callParent(arguments);
    }
});