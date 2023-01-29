$(document).ready(function () {
    // Push.create('MFSoftware Blog')

    /** BİLDİRİM GÖSTER **/
    $(".bldGoster").click(function () {
        alert(Push.Permission.has()); // İZİN VAR MI YOK MU


        Push.create("MFSoftware Blog", {
            body: "Yeni Makale Eklendi",
            icon: 'logo.png',
            timeout: 4000,
            tag : "bld",
            onClick: function () {
                window.focus();
                this.close();
            },
            onShow: function () {
              console.log("Açıldı");
            },
            onClose: function () {
                console.log("Kapandı");
            },
        });
    });

    /** BİLDİRİM GİZLE **/
    $(".bldGizle").click(function () {
        // Push.close('bld');
        // Push.clear();
    });
});
