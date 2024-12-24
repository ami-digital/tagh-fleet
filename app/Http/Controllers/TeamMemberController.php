<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamMemberRequest;
use App\Http\Requests\UpdateTeamMemberRequest;
use App\Models\TeamMember;


use App\Models\Vehicle;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class TeamMemberController extends Controller
{
    public function index(): \Inertia\Response
    {
        $members = TeamMember::all();
        return Inertia::render('TeamMembers/Index', ['members' => $members]);
    }

    public function create(): JsonResponse
    {

        $navs = [
            ['label' => 'Ways' , 'value' => 'WAYS'],
            ['label' => 'Google Map' , 'value' => 'GOOGLE'],
            ['label' => 'Apple' , 'value' => 'APPLE'],
        ] ;
        Role::query()->firstOrCreate(['name' => 'administrator']);
        $roles = Role::query()->get();
        return new JsonResponse([
            'status' => 'success',
            'options' => ['navs' => $navs , 'roles' => $roles]
        ], 200);
    }


    public function store(StoreTeamMemberRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['password'] = bcrypt('password');

        $roles = $data['roles'] ;

        $roles = Role::query()->whereIn('id' ,$roles)->get();

        $teamMember = TeamMember::query()->create($data);

//        $teamMember->syncRoles($roles);

//        return redirect()->route('team.members.index')->with('success', 'Team Member added successfully.');
        return to_route('team.members.index');
    }
    public function show(TeamMember $member): JsonResponse
    {

        $navs = [
            ['label' => 'Ways' , 'value' => 'WAYS'],
            ['label' => 'Google Map' , 'value' => 'GOOGLE'],
            ['label' => 'Apple' , 'value' => 'APPLE'],
        ] ;
        Role::query()->firstOrCreate(['name' => 'administrator']);
        $roles = Role::query()->get();

        return new JsonResponse([
            'status' => 'success',
            'options' => ['navs' => $navs , 'roles' => $roles , 'member' =>$member]
        ], 200);



    }
    public function update(UpdateTeamMemberRequest $request, TeamMember $member):  RedirectResponse
    {
        $data = $request->validated();
        $member->update($data);
//        return redirect()->route('team.members.index')->with('success', 'Team Member updated successfully.');
        return to_route('team.members.index');
    }



    public function destroy(TeamMember $member): RedirectResponse
    {

        $member->delete();
//        return redirect()->route('team.members.index')->with('success', 'Team Member deleted successfully.');
        return to_route('team.members.index');
    }

}
