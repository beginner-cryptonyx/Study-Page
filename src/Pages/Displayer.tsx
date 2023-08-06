// var KUTE = require("kute.js");
import KUTE from "kute.js";
import { useEffect } from "react";

export default function Formulae() {
    useEffect(() => {
        KUTE.fromTo(
            "#wr1",
            { path: "#wr1" },
            { path: "#wr_1" },
            { repeat: Infinity, duration: 23045, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wr2",
            { path: "#wr2" },
            { path: "#wr_2" },
            { repeat: Infinity, duration: 55020, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wr3",
            { path: "#wr3" },
            { path: "#wr_3" },
            { repeat: Infinity, duration: 23012, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wr4",
            { path: "#wr4" },
            { path: "#wr_4" },
            { repeat: Infinity, duration: 12022, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wr5",
            { path: "#wr5" },
            { path: "#wr_5" },
            { repeat: Infinity, duration: 43022, yoyo: true }
        ).start();

        // LEFT

        KUTE.fromTo(
            "#wl1",
            { path: "#wl1" },
            { path: "#wl_1" },
            { repeat: Infinity, duration: 23045, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wl2",
            { path: "#wl2" },
            { path: "#wl_2" },
            { repeat: Infinity, duration: 55020, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wl3",
            { path: "#wl3" },
            { path: "#wl_3" },
            { repeat: Infinity, duration: 23012, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wl4",
            { path: "#wl4" },
            { path: "#wl_4" },
            { repeat: Infinity, duration: 12022, yoyo: true }
        ).start();

        KUTE.fromTo(
            "#wl5",
            { path: "#wl5" },
            { path: "#wl_5" },
            { repeat: Infinity, duration: 43022, yoyo: true }
        ).start();
    });

    return (
        <>
            <div id="right_wave_container">
                <svg
                    id="right_wave"
                    viewBox="0 0 900 600"
                    width="900"
                    height="600"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    preserveAspectRatio="none"
                >
                    <path
                        id="wr1"
                        d="M772 600L770.3 585.7C768.7 571.3 765.3 542.7 760.8 514.2C756.3 485.7 750.7 457.3 752.8 428.8C755 400.3 765 371.7 773.2 343C781.3 314.3 787.7 285.7 785 257C782.3 228.3 770.7 199.7 767.8 171.2C765 142.7 771 114.3 771.5 85.8C772 57.3 767 28.7 764.5 14.3L762 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#8b0af6"
                    ></path>
                    <path
                        id="wr2"
                        d="M801 600L802.5 585.7C804 571.3 807 542.7 801.5 514.2C796 485.7 782 457.3 783.5 428.8C785 400.3 802 371.7 803.2 343C804.3 314.3 789.7 285.7 789.2 257C788.7 228.3 802.3 199.7 800.8 171.2C799.3 142.7 782.7 114.3 778 85.8C773.3 57.3 780.7 28.7 784.3 14.3L788 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#5f46f2"
                    ></path>
                    <path
                        id="wr3"
                        d="M813 600L813.3 585.7C813.7 571.3 814.3 542.7 819.5 514.2C824.7 485.7 834.3 457.3 837.7 428.8C841 400.3 838 371.7 833.8 343C829.7 314.3 824.3 285.7 826.3 257C828.3 228.3 837.7 199.7 842 171.2C846.3 142.7 845.7 114.3 837.3 85.8C829 57.3 813 28.7 805 14.3L797 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#385be6"
                    ></path>
                    <path
                        id="wr4"
                        d="M823 600L825.3 585.7C827.7 571.3 832.3 542.7 834.7 514.2C837 485.7 837 457.3 839.8 428.8C842.7 400.3 848.3 371.7 847.5 343C846.7 314.3 839.3 285.7 835.3 257C831.3 228.3 830.7 199.7 831 171.2C831.3 142.7 832.7 114.3 832.5 85.8C832.3 57.3 830.7 28.7 829.8 14.3L829 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#2768d3"
                    ></path>
                    <path
                        id="wr5"
                        d="M878 600L878.3 585.7C878.7 571.3 879.3 542.7 881.5 514.2C883.7 485.7 887.3 457.3 887.8 428.8C888.3 400.3 885.7 371.7 881.5 343C877.3 314.3 871.7 285.7 870.7 257C869.7 228.3 873.3 199.7 873.3 171.2C873.3 142.7 869.7 114.3 868 85.8C866.3 57.3 866.7 28.7 866.8 14.3L867 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#3870bb"
                    ></path>

                    {/* 
                    
                    */}

                    <path
                        id="wr_1"
                        visibility="hidden"
                        d="M712 600L709.2 590C706.3 580 700.7 560 699.7 540C698.7 520 702.3 500 698.7 480C695 460 684 440 683.8 420C683.7 400 694.3 380 695.2 360C696 340 687 320 681.8 300C676.7 280 675.3 260 680.7 240C686 220 698 200 704.2 180C710.3 160 710.7 140 709.2 120C707.7 100 704.3 80 698 60C691.7 40 682.3 20 677.7 10L673 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#c62368"
                    ></path>
                    <path
                        id="wr_2"
                        visibility="hidden"
                        d="M713 600L712.3 590C711.7 580 710.3 560 712.2 540C714 520 719 500 727.3 480C735.7 460 747.3 440 745 420C742.7 400 726.3 380 719.7 360C713 340 716 320 721 300C726 280 733 260 739.3 240C745.7 220 751.3 200 746.3 180C741.3 160 725.7 140 717.3 120C709 100 708 80 711.8 60C715.7 40 724.3 20 728.7 10L733 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#d53867"
                    ></path>
                    <path
                        id="wr_3"
                        visibility="hidden"
                        d="M777 600L773.5 590C770 580 763 560 764.8 540C766.7 520 777.3 500 776.8 480C776.3 460 764.7 440 762.3 420C760 400 767 380 769.2 360C771.3 340 768.7 320 768.3 300C768 280 770 260 775.2 240C780.3 220 788.7 200 787 180C785.3 160 773.7 140 773.3 120C773 100 784 80 786.7 60C789.3 40 783.7 20 780.8 10L778 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#e34c67"
                    ></path>
                    <path
                        id="wr_4"
                        visibility="hidden"
                        d="M801 600L799.8 590C798.7 580 796.3 560 797 540C797.7 520 801.3 500 806.5 480C811.7 460 818.3 440 820.8 420C823.3 400 821.7 380 820.5 360C819.3 340 818.7 320 821.2 300C823.7 280 829.3 260 827.2 240C825 220 815 200 808.7 180C802.3 160 799.7 140 797.7 120C795.7 100 794.3 80 801.5 60C808.7 40 824.3 20 832.2 10L840 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#ef5f67"
                    ></path>
                    <path
                        id="wr_5"
                        visibility="hidden"
                        d="M873 600L872 590C871 580 869 560 865.3 540C861.7 520 856.3 500 855.7 480C855 460 859 440 858 420C857 400 851 380 853.2 360C855.3 340 865.7 320 866.8 300C868 280 860 260 858.3 240C856.7 220 861.3 200 860.7 180C860 160 854 140 850.7 120C847.3 100 846.7 80 850.8 60C855 40 864 20 868.5 10L873 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#fa7268"
                    ></path>
                </svg>
            </div>
            <div id="left_wave_container">
                <svg
                    id="right_wave"
                    viewBox="0 0 900 600"
                    width="900"
                    height="600"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    preserveAspectRatio="none"
                >
                    <path
                        id="wl1"
                        d="M772 600L770.3 585.7C768.7 571.3 765.3 542.7 760.8 514.2C756.3 485.7 750.7 457.3 752.8 428.8C755 400.3 765 371.7 773.2 343C781.3 314.3 787.7 285.7 785 257C782.3 228.3 770.7 199.7 767.8 171.2C765 142.7 771 114.3 771.5 85.8C772 57.3 767 28.7 764.5 14.3L762 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#8b0af6"
                    ></path>
                    <path
                        id="wl2"
                        d="M801 600L802.5 585.7C804 571.3 807 542.7 801.5 514.2C796 485.7 782 457.3 783.5 428.8C785 400.3 802 371.7 803.2 343C804.3 314.3 789.7 285.7 789.2 257C788.7 228.3 802.3 199.7 800.8 171.2C799.3 142.7 782.7 114.3 778 85.8C773.3 57.3 780.7 28.7 784.3 14.3L788 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#5f46f2"
                    ></path>
                    <path
                        id="wl3"
                        d="M813 600L813.3 585.7C813.7 571.3 814.3 542.7 819.5 514.2C824.7 485.7 834.3 457.3 837.7 428.8C841 400.3 838 371.7 833.8 343C829.7 314.3 824.3 285.7 826.3 257C828.3 228.3 837.7 199.7 842 171.2C846.3 142.7 845.7 114.3 837.3 85.8C829 57.3 813 28.7 805 14.3L797 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#385be6"
                    ></path>
                    <path
                        id="wl4"
                        d="M823 600L825.3 585.7C827.7 571.3 832.3 542.7 834.7 514.2C837 485.7 837 457.3 839.8 428.8C842.7 400.3 848.3 371.7 847.5 343C846.7 314.3 839.3 285.7 835.3 257C831.3 228.3 830.7 199.7 831 171.2C831.3 142.7 832.7 114.3 832.5 85.8C832.3 57.3 830.7 28.7 829.8 14.3L829 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#2768d3"
                    ></path>
                    <path
                        id="wl5"
                        d="M878 600L878.3 585.7C878.7 571.3 879.3 542.7 881.5 514.2C883.7 485.7 887.3 457.3 887.8 428.8C888.3 400.3 885.7 371.7 881.5 343C877.3 314.3 871.7 285.7 870.7 257C869.7 228.3 873.3 199.7 873.3 171.2C873.3 142.7 869.7 114.3 868 85.8C866.3 57.3 866.7 28.7 866.8 14.3L867 0L900 0L900 14.3C900 28.7 900 57.3 900 85.8C900 114.3 900 142.7 900 171.2C900 199.7 900 228.3 900 257C900 285.7 900 314.3 900 343C900 371.7 900 400.3 900 428.8C900 457.3 900 485.7 900 514.2C900 542.7 900 571.3 900 585.7L900 600Z"
                        fill="#3870bb"
                    ></path>

                    {/* 
                    
                    */}

                    <path
                        id="wl_1"
                        visibility="hidden"
                        d="M712 600L709.2 590C706.3 580 700.7 560 699.7 540C698.7 520 702.3 500 698.7 480C695 460 684 440 683.8 420C683.7 400 694.3 380 695.2 360C696 340 687 320 681.8 300C676.7 280 675.3 260 680.7 240C686 220 698 200 704.2 180C710.3 160 710.7 140 709.2 120C707.7 100 704.3 80 698 60C691.7 40 682.3 20 677.7 10L673 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#c62368"
                    ></path>
                    <path
                        id="wl_2"
                        visibility="hidden"
                        d="M713 600L712.3 590C711.7 580 710.3 560 712.2 540C714 520 719 500 727.3 480C735.7 460 747.3 440 745 420C742.7 400 726.3 380 719.7 360C713 340 716 320 721 300C726 280 733 260 739.3 240C745.7 220 751.3 200 746.3 180C741.3 160 725.7 140 717.3 120C709 100 708 80 711.8 60C715.7 40 724.3 20 728.7 10L733 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#d53867"
                    ></path>
                    <path
                        id="wl_3"
                        visibility="hidden"
                        d="M777 600L773.5 590C770 580 763 560 764.8 540C766.7 520 777.3 500 776.8 480C776.3 460 764.7 440 762.3 420C760 400 767 380 769.2 360C771.3 340 768.7 320 768.3 300C768 280 770 260 775.2 240C780.3 220 788.7 200 787 180C785.3 160 773.7 140 773.3 120C773 100 784 80 786.7 60C789.3 40 783.7 20 780.8 10L778 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#e34c67"
                    ></path>
                    <path
                        id="wl_4"
                        visibility="hidden"
                        d="M801 600L799.8 590C798.7 580 796.3 560 797 540C797.7 520 801.3 500 806.5 480C811.7 460 818.3 440 820.8 420C823.3 400 821.7 380 820.5 360C819.3 340 818.7 320 821.2 300C823.7 280 829.3 260 827.2 240C825 220 815 200 808.7 180C802.3 160 799.7 140 797.7 120C795.7 100 794.3 80 801.5 60C808.7 40 824.3 20 832.2 10L840 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#ef5f67"
                    ></path>
                    <path
                        id="wl_5"
                        visibility="hidden"
                        d="M873 600L872 590C871 580 869 560 865.3 540C861.7 520 856.3 500 855.7 480C855 460 859 440 858 420C857 400 851 380 853.2 360C855.3 340 865.7 320 866.8 300C868 280 860 260 858.3 240C856.7 220 861.3 200 860.7 180C860 160 854 140 850.7 120C847.3 100 846.7 80 850.8 60C855 40 864 20 868.5 10L873 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
                        fill="#fa7268"
                    ></path>
                </svg>
            </div>
        </>
    );
}
