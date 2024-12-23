<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamMemberRequest;
use App\Http\Requests\UpdateTeamMemberRequest;
use App\Models\TeamMember;

use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index(): \Inertia\Response
    {
        $teamMembers = TeamMember::all();
        return Inertia::render('TeamMembers/Index', ['members' => $teamMembers]);
    }

    public function create(): JsonResponse
    {

        $options = [
            ['label' => 'Ways' , 'value' => 'WAYS'],
            ['label' => 'Google Map' , 'value' => 'GOOGLE'],
            ['label' => 'Apple' , 'value' => 'APPLE'],
        ] ;
        return new JsonResponse([
            'status' => 'success',
            'options' => $options,
        ], 200);
    }


    public function store(StoreTeamMemberRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt('password');

        $teamMember = TeamMember::query()->create($data);

        $teamMember->syncRoles($data['roles']);

        return redirect()->route('team-members.index')->with('success', 'Team Member added successfully.');
    }

    public function update(UpdateTeamMemberRequest $request, TeamMember $teamMember):  RedirectResponse
    {
        $data = $request->validated();
        $teamMember->update($data);
        return redirect()->route('team-members.index')->with('success', 'Team Member updated successfully.');

    }


    public function destroy(TeamMember $teamMember): RedirectResponse
    {
        $teamMember->delete();
        return redirect()->route('team-members.index')->with('success', 'Team Member deleted successfully.');
    }

}
