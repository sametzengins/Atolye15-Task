<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class ImageManipulationController extends Controller
{
    public function CreateImage(Request $request){
        $name=$request->fullName;
        $shape=$request->shape;
        $size=$request->size;

        $fullname= explode(" ",$name);
        $new_name = substr($fullname[0],0,1).substr(end($fullname),0,1);
        $string = $new_name;
        $font   = $size;
        $nsize  = $size;
        $im = @imagecreate ($nsize,$nsize);
        $a = rand(0,256);
        $b = rand(0,256);
        $c = rand(0,256);

        $background_color = imagecolorallocate ($im, $a, $b, $c);
        $text_color = imagecolorallocate ($im, 255-$a, 255-$b,255-$c);
        imagestring ($im, $font, 50, 50, $string, $text_color);
        $transparent = imagecolorallocatealpha($im, 0, 0, 0, 127);

        if ($shape == "oval"){
            $r=$size/2;
            for($x=0;$x<$size;$x++)
                for($y=0;$y<$size;$y++){
                    $c = imagecolorat($im,$x,$y);
                    $_x = $x - $size/2;
                    $_y = $y - $size/2;
                    if((($_x*$_x) + ($_y*$_y)) < ($r*$r)){
                        imagesetpixel($im,$x,$y,$c);
                    }else{
                        imagesetpixel($im,$x,$y,$transparent);
                    }
                }
        }

        ob_start();
        imagepng($im);
        $imstr = base64_encode(ob_get_clean());
        imagedestroy($im);
        if (cache()->has($name.$shape)) {
            cache()->get($name.$shape);
        }
        else{
            cache()->remem($name.$shape.$size,function () use ($imstr) {
                return $imstr;
            });
        }
        return view('index',array('data'=>$imstr));
    }
}
