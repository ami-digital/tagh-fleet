<?php

use App\Enums\VehicleAvailabilityEnums;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('driver_id')->nullable()->constrained('team_members')->onDelete('set null');
            $table->enum('availability' , VehicleAvailabilityEnums::values())->default(VehicleAvailabilityEnums::FULL_DAY->value);
            $table->boolean('include_driver_break')->default(false);
            $table->string('slot_start')->nullable();
            $table->string('slot_end')->nullable();
            $table->string('break_start')->nullable();
            $table->string('break_end')->nullable();
            $table->string('break_length')->nullable()->default(0);
            $table->string('start_location');
            $table->string('start_location_address')->nullable();
            $table->string('end_location_address')->nullable();
            $table->string('end_location');
            $table->json('skills')->nullable();
            $table->integer('max_number_of_stops')->default(15);
            $table->integer('capacity')->default(15);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
