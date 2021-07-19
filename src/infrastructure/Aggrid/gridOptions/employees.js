export const employees = [
  {
    id: 0,
    field: 'nombre',
    headerName: 'Nombre',
    width: 350,
    type: ['first', 'text'],
    floatingFilter: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'nickname',
    headerName: 'Nombre de usuario',
    width: 200,
    type: ['text'],
    floatingFilter: true,
    colId: 'nickname',
    resizable: true,
    sortable: true,
  },
  // {
  //   field: 'deleted_at',
  //   headerName: 'Estado',
  //   width: 200,
  //   type: 'actives',
  //   floatingFilterComponent: 'agDateColumnFilter',
  //   floatingFilterComponentParams: {
  //     suppressFilterButton: true,
  //   },
  //   resizable: true,
  //   sortable: true,
  // },
  {
    field: 'email',
    headerName: 'Correo electrónico',
    width: 300,
    type: ['text'],
    resizable: true,
    sortable: true,
  },
  {
    field: 'dni',
    headerName: 'NIF',
    width: 300,
    type: ['text'],
    resizable: true,
    sortable: true,
  },

  {
    field: 'rolesPublicos.0.rol.nombre',
    headerName: 'Perfil SFERA',
    width: 180,
    type: ['text'],
  },
  {
    field: 'rolesPublicos.1.rol.nombre',
    headerName: 'ERP Farmacéutico',
    width: 180,
    type: ['text'],
  },
  {
    field: 'rolesPublicos.2.rol.nombre',
    headerName: 'BI',
    width: 180,
    type: ['text'],
  },
  // {
  //   field: 'usuarioRol.nombre',
  //   headerName: 'Rol Area privada',
  //   width: 180,
  //   type: ['text'],
  // },

  //   {
  //     id: 2,
  //     field: 'nombre',
  //     headerName: 'Estado',
  //     width: 150,
  //     resizable: true,
  //     defaultWidth: null,
  //     minWidth: 80,
  //     maxWidth: 400,
  //     flex: 0,
  //     hide: false,
  //     pinned: false,
  //     lockPosition: false,
  //     sortable: true,
  //     headerTooltip: 'Estado',
  //     checkboxSelection: false,
  //     rowDrag: false,
  //   },
  //   {
  //     id: 0,
  //     field: 'nombre',
  //     headerName: 'Correo electrónico',
  //     width: 200,
  //     resizable: true,
  //     // defaultWidth: null,
  //     // minWidth: 80,
  //     // maxWidth: 400,
  //     // flex: 0,
  //     // hide: false,
  //     // pinned: false,
  //     // lockPosition: false,
  //     // sortable: true,
  //     // headerTooltip: 'Correo electronico',
  //     // checkboxSelection: false,
  //     // rowDrag: false,
  //   },
  //   {
  //     id: 3,
  //     field: 'nombre',
  //     headerName: 'NIF',
  //     width: 150,
  //     resizable: true,
  //     defaultWidth: null,
  //     minWidth: 80,
  //     maxWidth: 400,
  //     flex: 0,
  //     hide: false,
  //     pinned: false,
  //     lockPosition: false,
  //     sortable: true,
  //     headerTooltip: 'NIF',
  //     checkboxSelection: false,
  //     rowDrag: false,
  //   },
  //   {
  //     id: 4,
  //     field: 'nombre',
  //     headerName: 'Rol ERP',
  //     width: 200,
  //     resizable: true,
  //     defaultWidth: null,
  //     minWidth: 80,
  //     flex: 0,
  //     hide: false,
  //     pinned: false,
  //     lockPosition: false,
  //     sortable: true,
  //     headerTooltip: 'Nombre de la cabecera',
  //     checkboxSelection: false,
  //     rowDrag: false,
  //   },
  //   {
  //     id: 5,
  //     field: 'nombre',
  //     headerName: 'Rol ERP farmaceutico',
  //     width: 200,
  //     resizable: true,
  //     defaultWidth: null,
  //     minWidth: 80,
  //     maxWidth: 400,
  //     flex: 0,
  //     hide: false,
  //     pinned: false,
  //     lockPosition: false,
  //     sortable: true,
  //     headerTooltip: 'Rol ERP farmaceutico',
  //     checkboxSelection: false,
  //     rowDrag: false,
  //   },
  //   {
  //     id: 6,
  //     field: 'nombre',
  //     headerName: 'Rol BI',
  //     width: 200,
  //     resizable: true,
  //     defaultWidth: null,
  //     minWidth: 80,
  //     flex: 0,
  //     hide: false,
  //     pinned: false,
  //     lockPosition: false,
  //     sortable: true,
  //     headerTooltip: 'Rol BI',
  //     checkboxSelection: false,
  //     rowDrag: false,
  //   },
  //   {
  //     id: 0,
  //     field: 'nombre',
  //     headerName: 'Rol Area privada',
  //     width: 200,
  //     resizable: true,
  //     defaultWidth: null,
  //     minWidth: 80,
  //     flex: 0,
  //     hide: false,
  //     pinned: false,
  //     lockPosition: false,
  //     sortable: true,
  //     headerTooltip: 'Rol area privada',
  //     checkboxSelection: false,
  //     rowDrag: false,
  //   },
]