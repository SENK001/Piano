$(function() {
    $("div").click(function() {
        var text = '<video src="' + "min/" + $(this).html() + ".mp3" + '" autoplay></video>'
        $('body').append(text);
    });
    $(window).keydown(function(e) {
        var k = e.key.toLowerCase();

        switch (k) {
            case 'q':
                $('div:eq(0)').click();
                break;
            case 'w':
                $('div:eq(1)').click();
                break;
            case 'e':
                $('div:eq(2)').click();
                break;
            case 'r':
                $('div:eq(3)').click();
                break;
            case 't':
                $('div:eq(4)').click();
                break;
            case 'y':
                $('div:eq(5)').click();
                break;
            case 'u':
                $('div:eq(6)').click();
                break;

            case 'a':
                $('div:eq(7)').click();
                break;
            case 's':
                $('div:eq(8)').click();
                break;
            case 'd':
                $('div:eq(9)').click();
                break;
            case 'f':
                $('div:eq(10)').click();
                break;
            case 'g':
                $('div:eq(11)').click();
                break;
            case 'h':
                $('div:eq(12)').click();
                break;
            case 'j':
                $('div:eq(13)').click();
                break;

            case 'z':
                $('div:eq(14)').click();
                break;
            case 'x':
                $('div:eq(15)').click();
                break;
            case 'c':
                $('div:eq(16)').click();
                break;
            case 'v':
                $('div:eq(17)').click();
                break;
            case 'b':
                $('div:eq(18)').click();
                break;
            case 'n':
                $('div:eq(19)').click();
                break;
            case 'm':
                $('div:eq(20)').click();
                break;
        }
    });
})