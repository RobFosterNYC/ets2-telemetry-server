﻿Funbit.Ets.Telemetry.Dashboard.prototype.initialize = function (skinConfig) {
    //
    // skinConfig - a copy of the skin configuration from config.json
    //
    // this function is called before everything else, 
    // so you may perform any DOM or resource initializations here
    $([
        'images/bg-off.jpg', 'images/bg-on.jpg'
    ]).each(function () {
        $('<img/>')[0].src = this;
    });
}

Funbit.Ets.Telemetry.Dashboard.prototype.filter = function (data) {
    //
    // data - telemetry data JSON object
    //

    // This filter is used to change telemetry data 
    // before it is displayed on the dashboard.
    // You may convert km/h to mph, kilograms to tons, etc.

    // round truck speed
    data.truckSpeedRounded = Math.abs(Math.round(data.truckSpeed));
    // convert kilometers per hour to miles per hour (just an example)
    data.truckSpeedMph = data.truckSpeed * 0.621371;
    // convert kg to t
    data.trailerMass = (data.trailerMass / 1000.0) + 't';
    // format odometer data as: 00000.0
    data.truckOdometer = (Math.round(data.truckOdometer * 10) / 10).toFixed(1);
    // convert gear to readable format
    data.gear = data.gear > 0 ? 'D' + data.gear : (data.gear < 0 ? 'R' : 'N');
    // convert rpm to rpm * 100
    data.engineRpm = data.engineRpm / 100;
    // return changed data to the core for rendering
    return data;
};

Funbit.Ets.Telemetry.Dashboard.prototype.render = function (data) {
    //
    // data - same data object as in the filter function
    //

    // we don't have anything custom to render in this skin,
    // but you may use jQuery here to update any element
    // with any custom animation, logic or style
}