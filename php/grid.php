<?php
	echo '<table width=200 height=100 border=1>';
	echo '<tr>';
	for ($n = 1; $n < 13; ++$n) {
		echo '<td>';
		//echo $n; 
		echo "n=$n";
		echo '</td>';
		if ($n%4 == 0){
			echo '</tr><tr>';
		}
	}
	echo '</table>';
	echo '</tr>';
?>