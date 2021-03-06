export const LOCALES = {
  es: {
    // Set Filter
    selectAll: '(Seleccionar todo)',
    selectAllSearchResults: '(Seleccionar todos los resultados de la búsqueda)',
    searchOoo: 'Buscar...',
    blanks: '(Blanks)',
    noMatches: 'No hay coincidencias',

    // Number Filter & Text Filter
    filterOoo: 'Filtrar...',
    equals: 'Igual',
    notEqual: 'No es igual',
    empty: 'Elige uno',

    // Number Filter
    lessThan: 'Menos que',
    greaterThan: 'Mas grande que',
    lessThanOrEqual: 'Menor o igual',
    greaterThanOrEqual: 'Mayor que o igual',
    inRange: 'En el rango',
    inRangeStart: 'a',
    inRangeEnd: 'desde',

    // Text Filter
    contains: 'Contiene',
    notContains: 'No contiene',
    startsWith: 'Comienza con',
    endsWith: 'Termina con',

    // Date Filter
    dateFormatOoo: 'yyyy-mm-dd',

    // Filter Conditions
    andCondition: 'Y',
    orCondition: 'O',

    // Filter Buttons
    applyFilter: 'Aplicar',
    resetFilter: 'Reset',
    clearFilter: 'Borrar',
    cancelFilter: 'Cancelar',

    // Filter Titles
    textFilter: 'Filtro de texto',
    numberFilter: 'Number Filter',
    dateFilter: 'Filtro de fecha',
    setFilter: 'Establecer filtro',

    // Side Bar
    columns: 'Columnas',
    filters: 'Filtres',

    // columns tool panel
    pivotMode: 'Pivot Mode',
    groups: 'Grupos de filas',
    rowGroupColumnsEmptyMessage: 'Arrastre aquí para crear grupos',
    values: 'Valores',
    valueColumnsEmptyMessage: 'Arrastre aquí para agregar',
    pivots: 'Etiquetas de columna',
    pivotColumnsEmptyMessage:
      'Arrastre aquí para establecer etiquetas de columna',

    // Header of the Default Group Column
    group: 'Grupo',

    // Other
    loadingOoo: 'Cargando...',
    noRowsToShow: 'No hay filas para mostrar',
    enabled: 'Habilitada',

    // Menu
    pinColumn: 'Pin Column',
    pinLeft: 'Pin Izquierda',
    pinRight: 'Pin Derecha',
    noPin: 'No Pin',
    valueAggregation: 'Value Aggregation',
    autosizeThiscolumn: 'Tamaño automático de esta columna',
    autosizeAllColumns: 'Tamaño automático de todas las columnas',
    groupBy: 'Agrupar por',
    ungroupBy: 'Desagrupar por',
    resetColumns: 'Reset Columnas',
    expandAll: 'Expandir todo',
    collapseAll: 'Cierra todo',
    copy: 'Copiar',
    ctrlC: 'Ctrl+C',
    copyWithHeaders: 'Copiar con encabezados',
    paste: 'Pegar',
    ctrlV: 'Ctrl+V',
    export: 'Exportar',
    csvExport: 'CSV Exportar',
    excelExport: 'Excel Exportar (.xlsx)',
    excelXmlExport: 'Excel Exportar (.xml)',

    // Enterprise Menu Aggregation and Status Bar
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    none: 'None',
    count: 'Contar',
    avg: 'Promedio',
    filteredRows: 'Filtrada',
    selectedRows: 'Seleccionada',
    totalRows: 'Total Filas',
    totalAndFilteredRows: 'Filas',
    more: 'Más',
    to: 'a',
    of: 'de',
    page: 'Página',
    nextPage: 'Próxima Página',
    lastPage: 'Última Página',
    firstPage: 'Primera Página',
    previousPage: 'Previa Página',

    // Enterprise Menu (Charts)
    pivotChartAndPivotMode: 'Pivot Chart & Pivot Mode',
    pivotChart: 'Pivot Chart',
    chartRange: 'Chart Range',

    columnChart: 'Column',
    groupedColumn: 'Grouped',
    stackedColumn: 'Stacked',
    normalizedColumn: '100% Stacked',

    barChart: 'Bar',
    groupedBar: 'Grouped',
    stackedBar: 'Stacked',
    normalizedBar: '100% Stacked',

    pieChart: 'Pie',
    pie: 'Pie',
    doughnut: 'Doughnut',

    line: 'Line',

    xyChart: 'X Y (Scatter)',
    scatter: 'Scatter',
    bubble: 'Bubble',

    areaChart: 'Area',
    area: 'Area',
    stackedArea: 'Stacked',
    normalizedArea: '100% Stacked',

    histogramChart: 'Histogram',

    // Charts
    pivotChartTitle: 'Pivot Chart',
    rangeChartTitle: 'Range Chart',
    settings: 'Settings',
    data: 'Data',
    format: 'Format',
    categories: 'Categories',
    defaultCategory: '(None)',
    series: 'Series',
    xyValues: 'X Y Values',
    paired: 'Paired Mode',
    axis: 'Axis',
    navigator: 'Navigator',
    color: 'Color',
    thickness: 'Thickness',
    xType: 'X Type',
    automatic: 'Automatic',
    category: 'Category',
    number: 'Number',
    time: 'Time',
    xRotation: 'X Rotation',
    yRotation: 'Y Rotation',
    ticks: 'Ticks',
    width: 'Width',
    height: 'Height',
    length: 'Length',
    padding: 'Padding',
    spacing: 'Spacing',
    chart: 'Chart',
    title: 'Title',
    titlePlaceholder: 'Chart title - double click to edit',
    background: 'Background',
    font: 'Font',
    top: 'Top',
    right: 'Right',
    bottom: 'Bottom',
    left: 'Left',
    labels: 'Labels',
    size: 'Size',
    minSize: 'Minimum Size',
    maxSize: 'Maximum Size',
    legend: 'Legend',
    position: 'Position',
    markerSize: 'Marker Size',
    markerStroke: 'Marker Stroke',
    markerPadding: 'Marker Padding',
    itemSpacing: 'Item Spacing',
    itemPaddingX: 'Item Padding X',
    itemPaddingY: 'Item Padding Y',
    layoutHorizontalSpacing: 'Horizontal Spacing',
    layoutVerticalSpacing: 'Vertical Spacing',
    strokeWidth: 'Stroke Width',
    offset: 'Offset',
    offsets: 'Offsets',
    tooltips: 'Tooltips',
    callout: 'Callout',
    markers: 'Markers',
    shadow: 'Shadow',
    blur: 'Blur',
    xOffset: 'X Offset',
    yOffset: 'Y Offset',
    lineWidth: 'Line Width',
    normal: 'Normal',
    bold: 'Bold',
    italic: 'Italic',
    boldItalic: 'Bold Italic',
    predefined: 'Predefined',
    fillOpacity: 'Fill Opacity',
    strokeOpacity: 'Line Opacity',
    histogramBinCount: 'Bin count',
    columnGroup: 'Column',
    barGroup: 'Bar',
    pieGroup: 'Pie',
    lineGroup: 'Line',
    scatterGroup: 'X Y (Scatter)',
    areaGroup: 'Area',
    histogramGroup: 'Histogram',
    groupedColumnTooltip: 'Grouped',
    stackedColumnTooltip: 'Stacked',
    normalizedColumnTooltip: '100% Stacked',
    groupedBarTooltip: 'Grouped',
    stackedBarTooltip: 'Stacked',
    normalizedBarTooltip: '100% Stacked',
    pieTooltip: 'Pie',
    doughnutTooltip: 'Doughnut',
    lineTooltip: 'Line',
    groupedAreaTooltip: 'Area',
    stackedAreaTooltip: 'Stacked',
    normalizedAreaTooltip: '100% Stacked',
    scatterTooltip: 'Scatter',
    bubbleTooltip: 'Bubble',
    histogramTooltip: 'Histogram',
    noDataToChart: 'No data available to be charted.',
    pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
  },
  ca: {
    // Set Filter
    selectAll: '(Seleccionar todo)',
    selectAllSearchResults: '(Seleccionar todos los resultados de la búsqueda)',
    searchOoo: 'Cerca...',
    blanks: '(Blanks)',
    noMatches: 'No hay coincidencias',

    // Number Filter & Text Filter
    filterOoo: 'Filtrar...',
    equals: 'Igual',
    notEqual: 'No es igual',
    empty: 'Elige uno',

    // Number Filter
    lessThan: 'Menos que',
    greaterThan: 'Mas grande que',
    lessThanOrEqual: 'Menor o igual',
    greaterThanOrEqual: 'Mayor que o igual',
    inRange: 'En el rango',
    inRangeStart: 'a',
    inRangeEnd: 'desde',

    // Text Filter
    contains: 'Conté',
    notContains: 'No conté',
    startsWith: 'Comença amb',
    endsWith: 'Acaba amb',

    // Date Filter
    dateFormatOoo: 'yyyy-mm-dd',

    // Filter Conditions
    andCondition: 'Y',
    orCondition: 'O',

    // Filter Buttons
    applyFilter: 'Aplicar',
    resetFilter: 'Reset',
    clearFilter: 'Esborrar',
    cancelFilter: 'Cancel·lar',

    // Filter Titles
    textFilter: 'Filtro de texto',
    numberFilter: 'Number Filter',
    dateFilter: 'Filtro de fecha',
    setFilter: 'Establecer filtro',

    // Side Bar
    columns: 'Columnes',
    filters: 'Filtros',

    // columns tool panel
    pivotMode: 'Pivot Mode',
    groups: 'Grupos de filas',
    rowGroupColumnsEmptyMessage: 'Arrossegament aquí per a crear grups',
    values: 'Valores',
    valueColumnsEmptyMessage: 'Arrastre aquí para agregar',
    pivots: 'Etiquetas de columna',
    pivotColumnsEmptyMessage:
      'Arrastre aquí para establecer etiquetas de columna',

    // Header of the Default Group Column
    group: 'Grup',

    // Other
    loadingOoo: 'Carregant...',
    noRowsToShow: 'No hi ha files per a mostrar',
    enabled: 'Habilitada',

    // Menu
    pinColumn: 'Pin Column',
    pinLeft: 'Pin Izquierda',
    pinRight: 'Pin Derecha',
    noPin: 'No Pin',
    valueAggregation: 'Value Aggregation',
    autosizeThiscolumn: 'Tamaño automático de esta columna',
    autosizeAllColumns: 'Tamaño automático de todas las columnas',
    groupBy: 'Agrupar por',
    ungroupBy: 'Desagrupar por',
    resetColumns: 'Reset Columnas',
    expandAll: 'Expandir todo',
    collapseAll: 'Cierra todo',
    copy: 'Copiar',
    ctrlC: 'Ctrl+C',
    copyWithHeaders: 'Copiar con encabezados',
    paste: 'Pegar',
    ctrlV: 'Ctrl+V',
    export: 'Exportar',
    csvExport: 'CSV Exportar',
    excelExport: 'Excel Exportar (.xlsx)',
    excelXmlExport: 'Excel Exportar (.xml)',

    // Enterprise Menu Aggregation and Status Bar
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    none: 'None',
    count: 'Contar',
    avg: 'Promedio',
    filteredRows: 'Filtrada',
    selectedRows: 'Seleccionada',
    totalRows: 'Total Filas',
    totalAndFilteredRows: 'Filas',
    more: 'Más',
    to: 'a',
    of: 'de',
    page: 'Página',
    nextPage: 'Próxima Página',
    lastPage: 'Última Página',
    firstPage: 'Primera Página',
    previousPage: 'Previa Página',

    // Enterprise Menu (Charts)
    pivotChartAndPivotMode: 'Pivot Chart & Pivot Mode',
    pivotChart: 'Pivot Chart',
    chartRange: 'Chart Range',

    columnChart: 'Column',
    groupedColumn: 'Grouped',
    stackedColumn: 'Stacked',
    normalizedColumn: '100% Stacked',

    barChart: 'Bar',
    groupedBar: 'Grouped',
    stackedBar: 'Stacked',
    normalizedBar: '100% Stacked',

    pieChart: 'Pie',
    pie: 'Pie',
    doughnut: 'Doughnut',

    line: 'Line',

    xyChart: 'X Y (Scatter)',
    scatter: 'Scatter',
    bubble: 'Bubble',

    areaChart: 'Area',
    area: 'Area',
    stackedArea: 'Stacked',
    normalizedArea: '100% Stacked',

    histogramChart: 'Histogram',

    // Charts
    pivotChartTitle: 'Pivot Chart',
    rangeChartTitle: 'Range Chart',
    settings: 'Settings',
    data: 'Data',
    format: 'Format',
    categories: 'Categories',
    defaultCategory: '(None)',
    series: 'Series',
    xyValues: 'X Y Values',
    paired: 'Paired Mode',
    axis: 'Axis',
    navigator: 'Navigator',
    color: 'Color',
    thickness: 'Thickness',
    xType: 'X Type',
    automatic: 'Automatic',
    category: 'Category',
    number: 'Number',
    time: 'Time',
    xRotation: 'X Rotation',
    yRotation: 'Y Rotation',
    ticks: 'Ticks',
    width: 'Width',
    height: 'Height',
    length: 'Length',
    padding: 'Padding',
    spacing: 'Spacing',
    chart: 'Chart',
    title: 'Title',
    titlePlaceholder: 'Chart title - double click to edit',
    background: 'Background',
    font: 'Font',
    top: 'Top',
    right: 'Right',
    bottom: 'Bottom',
    left: 'Left',
    labels: 'Labels',
    size: 'Size',
    minSize: 'Minimum Size',
    maxSize: 'Maximum Size',
    legend: 'Legend',
    position: 'Position',
    markerSize: 'Marker Size',
    markerStroke: 'Marker Stroke',
    markerPadding: 'Marker Padding',
    itemSpacing: 'Item Spacing',
    itemPaddingX: 'Item Padding X',
    itemPaddingY: 'Item Padding Y',
    layoutHorizontalSpacing: 'Horizontal Spacing',
    layoutVerticalSpacing: 'Vertical Spacing',
    strokeWidth: 'Stroke Width',
    offset: 'Offset',
    offsets: 'Offsets',
    tooltips: 'Tooltips',
    callout: 'Callout',
    markers: 'Markers',
    shadow: 'Shadow',
    blur: 'Blur',
    xOffset: 'X Offset',
    yOffset: 'Y Offset',
    lineWidth: 'Line Width',
    normal: 'Normal',
    bold: 'Bold',
    italic: 'Italic',
    boldItalic: 'Bold Italic',
    predefined: 'Predefined',
    fillOpacity: 'Fill Opacity',
    strokeOpacity: 'Line Opacity',
    histogramBinCount: 'Bin count',
    columnGroup: 'Column',
    barGroup: 'Bar',
    pieGroup: 'Pie',
    lineGroup: 'Line',
    scatterGroup: 'X Y (Scatter)',
    areaGroup: 'Area',
    histogramGroup: 'Histogram',
    groupedColumnTooltip: 'Grouped',
    stackedColumnTooltip: 'Stacked',
    normalizedColumnTooltip: '100% Stacked',
    groupedBarTooltip: 'Grouped',
    stackedBarTooltip: 'Stacked',
    normalizedBarTooltip: '100% Stacked',
    pieTooltip: 'Pie',
    doughnutTooltip: 'Doughnut',
    lineTooltip: 'Line',
    groupedAreaTooltip: 'Area',
    stackedAreaTooltip: 'Stacked',
    normalizedAreaTooltip: '100% Stacked',
    scatterTooltip: 'Scatter',
    bubbleTooltip: 'Bubble',
    histogramTooltip: 'Histogram',
    noDataToChart: 'No data available to be charted.',
    pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
  },
}
