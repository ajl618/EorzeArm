import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    loading: false,
    initialized: false,
    imagenPrincipal: null,
  }),
  actions: {
    setBusy: function(){
      return new Promise((resolve) => {
        this.loading = true;
        resolve();
      });
    },
    setIdle: function(){
      return new Promise((resolve) => {
        this.loading = false;
        resolve();
      });
    },

    showAlert: function(_type, _title, _content, _confirmButtonText, _cancelButtonText, options) {
      var defaultOptions = {heightAuto: false, allowOutsideClick: false, buttonsStyling: false};
      
      if( options ) defaultOptions = Object.assign({}, defaultOptions, options);

      if( _type ) defaultOptions.icon = _type;
      if( _title ) defaultOptions.title = _title;
      if( _content ) defaultOptions.html = _content;

      if( _confirmButtonText ) {
        defaultOptions.showConfirmButton = true;
        defaultOptions.confirmButtonText = _confirmButtonText;
      }

      if( _cancelButtonText ) {
        defaultOptions.showCancelButton = true;
        defaultOptions.cancelButtonText = _cancelButtonText;
      }

      return Swal.fire(defaultOptions);
    },
    openUrl: function(_url, _target, _config){
      if( !_url ) return;

      var target = _target || "_blank";
      var config = _config || "location=yes,hideurlbar=no";

      try {
        var ref = cordova.InAppBrowser.open(_url , target, config);
        return ref;
      } catch(e) {
        var ref = window.open(_url, target, config);
        return ref
      }
    },
  }
});