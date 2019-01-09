<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePemasok extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pemasok', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama');
            $table->text('alamat');
            $table->string('kota');
            $table->string('provinsi');
            $table->string('tlp1')->nullable();
            $table->string('tlp2')->nullable();
            $table->string('toko')->nullable();
            $table->string('foto')->nullable();
            $table->string('keterangan')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pemasok');
    }
}
