function change() {
    switch ($("select").val()) {
        case "middle":
            $("main").html('<div>C5</div><div>D5</div><div>E5</div><div>F5</div><div>G5</div><div>A5</div><div>B5</div><div>C4</div><div>D4</div><div>E4</div><div>F4</div><div>G4</div><div>A4</div><div>B4</div><div>C3</div><div>D3</div><div>E3</div><div>F3</div><div>G3</div><div>A3</div><div>B3</div>');
            break;
        case "low":
            $("main").html('<div>C3</div><div>D3</div><div>E3</div><div>F3</div><div>G3</div><div>A3</div><div>B3</div><div>C2</div><div>D2</div><div>E2</div><div>F2</div><div>G2</div><div>A2</div><div>B2</div><div>C1</div><div>D1</div><div>E1</div><div>F1</div><div>G1</div><div>A1</div><div>B1</div>');
            break;
        case "hight":
            $("main").html('<div>C7</div><div>D7</div><div>E7</div><div>F7</div><div>G7</div><div>A7</div><div>B7</div><div>C6</div><div>D6</div><div>E6</div><div>F6</div><div>G6</div><div>A6</div><div>B6</div><div>C5</div><div>D5</div><div>E5</div><div>F5</div><div>G5</div><div>A5</div><div>B5</div>');
            break;
    }
    $("main div").click(function() {
        var html = '<video src="' + "min/" + $(this).text() + ".mp3" + '" autoplay></video>';
        $("body").append(html);
    });
}



$(document).ready(function() {
    $("main div").click(function() {
        var html = '<video src="' + "min/" + $(this).text() + ".mp3" + '" autoplay></video>';
        $("body").append(html);
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

            case '1':
                $('div:eq(14)').click();
                break;
            case '2':
                $('div:eq(15)').click();
                break;
            case '3':
                $('div:eq(16)').click();
                break;
            case '4':
                $('div:eq(17)').click();
                break;
            case '5':
                $('div:eq(18)').click();
                break;
            case '6':
                $('div:eq(19)').click();
                break;
            case '7':
                $('div:eq(20)').click();
                break;

            case '8':
                $('div:eq(7)').click();
                break;
            case '9':
                $('div:eq(8)').click();
                break;
        }
    });
})