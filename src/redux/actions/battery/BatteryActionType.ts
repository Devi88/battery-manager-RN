export enum BatteryActionType {
    GET_BATTERY_REQUEST = 'GET_BATTERY_REQUEST',
    GET_BATTERY_RECEIVED = 'GET_BATTERY_RECEIVED',

    GET_BATTERIES_REQUEST = 'GET_BATTERIES_REQUEST',
    GET_BATTERIES_RECEIVED = 'GET_BATTERIES_RECEIVED',

    ADD_BATTERY_REQUEST = 'ADD_BATTERY_REQUEST',
    ADD_BATTERY_RECEIVED = 'ADD_BATTERY_RECEIVED',


    // TODO: Naprawić potem
    BATTERY_RECEIVED = 'BATTERY_RECEIVED',

    REQUEST_GET_BATTERIES = 'REQUEST_GET_BATTERIES',


    REQUEST_ADD_BATTERY = 'REQUEST_ADD_BATTERY',
    BATTERY_ADD = 'BATTERY_ADD',

    REQUEST_UPDATE_BATTERY = 'REQUEST_UPDATE_BATTERY',
    BATTERY_UPDATE = 'BATTERY_UPDATE',

    REQUEST_EDIT_BATTERY = 'REQUEST_EDIT_BATTERY',
    BATTERY_EDIT = 'BATTERY_EDIT',

    REQUEST_DELETE_BATTERY = 'REQUEST_DELETE_BATTERY',
    BATTERY_DELETE = 'BATTERY_DELETE',
}

export default BatteryActionType;